import { useState } from "react";
import { Upload, Modal } from "antd";

const ImageUpload = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handlePreview = async (file) => {
    setPreviewImage(file.url || file.thumbUrl);
    setPreviewVisible(true);
  };

  const handleCancel = () => setPreviewVisible(false);

  const handleChange = ({ fileList }) => setFileList(fileList);

  return (
    <div>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={() => false}
      >
        {fileList.length >= 1 ? null : (
          <div>
            <div style={{ marginTop: 8 }}>Upload Image</div>
          </div>
        )}
      </Upload>

      <Modal open={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="Preview" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default ImageUpload;
