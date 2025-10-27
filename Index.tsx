import { useState } from "react";
import { Toolbar } from "@/components/editor/Toolbar";
import { EditorCanvas } from "@/components/editor/EditorCanvas";
import { PropertiesPanel } from "@/components/editor/PropertiesPanel";
import { ImageUpload } from "@/components/editor/ImageUpload";
import { ImageSidebar } from "@/components/editor/ImageSidebar";

const Index = () => {
  const [images, setImages] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeTool, setActiveTool] = useState("select");
  const [activeColor, setActiveColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(2);
  const [fontSize, setFontSize] = useState(24);
  const [showUpload, setShowUpload] = useState(false);

  const handleImageUpload = (imageUrl: string) => {
    setImages([...images, imageUrl]);
    setActiveImage(imageUrl);
    setShowUpload(false);
  };

  const handleAddImage = () => {
    setShowUpload(true);
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <Toolbar activeTool={activeTool} onToolChange={setActiveTool} />
      
      <div className="flex flex-1 overflow-hidden">
        <ImageSidebar
          images={images}
          activeImage={activeImage}
          onImageSelect={setActiveImage}
          onAddImage={handleAddImage}
        />

        <div className="flex-1">
          {!activeImage && !showUpload ? (
            <ImageUpload onImageUpload={handleImageUpload} />
          ) : showUpload ? (
            <ImageUpload onImageUpload={handleImageUpload} />
          ) : (
            <EditorCanvas
              image={activeImage}
              activeTool={activeTool}
              activeColor={activeColor}
              brushSize={brushSize}
              fontSize={fontSize}
            />
          )}
        </div>

        {activeImage && (
          <PropertiesPanel
            activeColor={activeColor}
            onColorChange={setActiveColor}
            brushSize={brushSize}
            onBrushSizeChange={setBrushSize}
            fontSize={fontSize}
            onFontSizeChange={setFontSize}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
