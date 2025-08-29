import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import FormData from 'form-data';

function TestimonialForm() {
  // const fileInputRef = useRef(null);
  const token = "82997d2d5230c00bd2386504a6523b267d6ea2b80c200d5e40a9aafda054d458d8d5cbc3b51578769b9ba67f84373eda3b003d3d0ce25af0a0b778aba2bd5da9064ca2e4cf291310694a30dbb09f5ac7ae9c74517adda0d66392b88fc0a6c49a281fc3ef4d42c8504a0d86dda1adf2b4cb50eb27666c307466039404d0959aac"
  const { register, handleSubmit } = useForm();
  // const [image, setFile] = React.useState(null);

  const onSubmit = async (data) => {

    const formData = new FormData();
    formData.append("data", JSON.stringify({
      name: data.name,
      profession: data.profession,
      email: data.email,
      message: data.message,
    }));

    if (data.image && data.image.length > 0) {
      formData.append("files.images", data.image[0]); // Only take the first file
    }

    console.log('FormData contents:');
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const res = await axios.post(`http://localhost:1337/api/testimonials`,formData,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const response = await res.data;
      console.log(response);

    } catch (error) {
      console.error("Error:", error.message);
    }

    // const formData = new FormData();
    // const val = {
    //   Name: data.name,
    //   Email: data.email,
    //   Profession: data.profession,
    //   message: data.message,
    // };

    // formData.append("data", JSON.stringify(val)); // Must be JSON string

    // if (data.image && data.image.length > 0) {
    //   formData.append("files.images", data.image[0]); // Only take the first file
    // }

    // const res = await fetch("http://localhost:1337/api/testimonials",{
    //   method: "POST",
    //   body: formData,
    //   headers: { 'Content-Type': 'multipart/form-data' },
    //   transformRequest: () => formData
    // });

    // const result = await res.json();
    // console.log(result);

  }

  // const onFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFile(file);
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto overflow-hidden flex flex-col md:gap-5 gap-3" >
      <input
        className="border px-3 py-2 rounded-lg bg-gray-300"
        type="text"
        id="name"
        name="name"
        placeholder="Your Full Name"
        {...register("name")}
        required
      />
      <input
        className="border px-3 py-2 rounded-lg bg-gray-300"
        type="text"
        id="profession"
        name="profession"
        placeholder="Your Profession"
        {...register("profession")}
        required
      />
      <input
        className="border px-3 py-2 rounded-lg bg-gray-300"
        type="file"
        accept="image/*"
        id="pfp"
        name="image"
        {...register("image")}
      // onChange={onFileChange}
      />
      <input
        className="border px-3 py-2 rounded-lg bg-gray-300"
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        {...register("email")}
        required
      />
      <textarea
        className="border px-3 py-2 rounded-lg bg-gray-300 resize-none"
        id="message"
        name="message"
        placeholder="Your Message"
        {...register("message")}
      />
      <button
        className="bg-green-800 text-white font-2xl py-3 rounded-2xl font-semibold"
        type="submit"
      >
        Send Request
      </button>
    </form>
  );
}

export default TestimonialForm;
