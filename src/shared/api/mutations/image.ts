import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { toast } from "@/components/ui/use-toast";

export const UploadImageLocal = async (data:any) => {  
  const formData = new FormData();
  formData.append('file', data);
  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();

    if (response.ok) {
      // toast({
      //   variant: 'success',
      //   title: 'Success',
      //   description: 'Berhasil Upload Gambar',
      // });
    } else {
      toast({
        variant: 'destructive',
        title: 'Failed',
        description: 'Gagal Upload Gambar',
      });
    }
    return result
  } catch (error) {
    toast({
      variant: 'destructive',
      title: 'Failed',
      description: 'Gagal Upload Gambar',
    });
  }
};