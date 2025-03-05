import React, { useState } from "react";
import { toast } from "react-toastify";
import Resize from "react-image-file-resizer";
import useEcomStore from "../../store/ecom-store";
import { removeFiles, uploadFiles } from "../../api/product";

const UploadFile = ({ form, setForm }) => {
  const token = useEcomStore((state) => state.token);
  const [isloading, setIsLoading] = useState(false);
  const handleOnchange = (e) => {
    const files = e.target.files;
    if (files) {
      setIsLoading(true);
      let allFiles = form.images;
      for (let i = 0; i < files.length; i++) {
        console.log(files[i]);

        const file = files[i];
        if (!file.type.startsWith("image/")) {
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
                console.log(res);
                allFiles.push(res.data);
                setForm({
                  ...form,
                  images: allFiles,
                });
                setIsLoading(false);
                toast.success("Upload image Sucess!!!");
              })
              .catch((err) => {
                console.log(err);
                setIsLoading(false);
              });
          },
          "base64"
        );
      }
    }
  };

  const handleDelete = (public_id)=>{
    const images = form.images
    removeFiles(token, public_id)
    .then((res)=> {
       
        const filterImages = images.filter((item,index)=>{
            console.log(item)
            return item.public_id !== public_id
        })
        setForm({
            ...form,
            images: filterImages
        })
        toast.error(res.data)
    })
    .catch((err)=>{
        
        console.log(err)
    })
  }
  return (
    <div>
      <div className="flex mx-4 gap-4 my-1">
        {form.images.map((item, index) => (
          <div className="relative">
            <img className="w-24 h-24" src={item.url} />

            <button 
            onClick={()=>handleDelete(item.public_id)}
            className="btn btn-circle absolute top-0 right-0 w-5 h-5">
              <svg
                fill="#ffffff"
                viewBox="-3.5 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
                class="cf-icon-svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
                </g>
              </svg>
            </button>
          </div>

        ))}
      </div>
      <div>
        <input
          onChange={handleOnchange}
          type="file"
          name="images"
          className="file-input  text-slate-800 bg-slate-100 mb-10"
          multiple
        />
      </div>
    </div>
  );
};

export default UploadFile;
