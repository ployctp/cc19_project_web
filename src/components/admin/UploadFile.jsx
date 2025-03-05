
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Resize from 'react-image-file-resizer'
import useEcomStore from '../../store/ecom-store'
import { uploadFiles } from '../../api/product';


const UploadFile = ({form, setForm}) => {
    const token = useEcomStore((state) => state.token)
    const[isloading,setIsLoading] = useState(false)
    const handleOnchange = (e) =>{

        const files = e.target.files
        if(files){
            setIsLoading(true)
            let allFiles = form.images 
            for (let i = 0; i < files.length; i++){

                console.log(files[i])

                const file = files[i]
                if (!file.type.startsWith('image/')){
                    toast.error(`File ${file.name} is not an image`);
                    continue;
                }
                Resize.imageFileResizer(
                    files[i],
                    720,
                    720,
                    "JPEG",
                    100,
                    0,
                    (data) => {
                        
                        uploadFiles(token, data)
                            .then((res) => {
                                console.log(res)
                                allFiles.push(res.data)
                                setForm({
                                    ...form,
                                    images: allFiles
                                })
                                setIsLoading(false)
                                toast.success('Upload image Sucess!!!')
                            })
                            .catch((err) => {
                                console.log(err)
                                setIsLoading(false)
                            })  
                    },
                    "base64"
                )
            }
        }
        
    }
  return (
    <div>
        <input 
        onChange={handleOnchange}
        type="file" 
        name='images'
        className="file-input  text-slate-800 bg-slate-100 mb-10" 
        multiple
        />
    </div>
  )
}

export default UploadFile