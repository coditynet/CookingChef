"use client";
import { FileUpload } from "@/components/file-upload";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ImageForm() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Recipe Images</CardTitle>
          <CardDescription>Add an Image for everyone to see</CardDescription>
        </CardHeader>
        <CardContent>
          <FileUpload
            endpoint="recipeAttachment"
            onChange={(url, originalFilename) => {
              if (url && originalFilename) {
              }
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
