'use client';

import { useRef, useState, ChangeEvent } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

interface ImagePickerProps {
  name: string;
}

export default function ImagePicker({ name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.result && typeof fileReader.result === "string") {
        setPickedImage(fileReader.result);
      }
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <div className={styles.controls}>
        <div 
          className={styles.preview}
          onClick={handlePickClick}
        >
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by user."
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={styles.input}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
      </div>
    </div>
  );
}
