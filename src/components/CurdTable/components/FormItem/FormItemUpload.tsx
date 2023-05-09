import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import { CurdTableColumn } from "../../types";

interface Props {
  column: CurdTableColumn
}

const getBase64 = (img: File, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const FormItemUpload: React.FC<Props> = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps["onChange"] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as File, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
    if(props.column.uploadOption && props.column.uploadOption.onChange) {
      props.column.uploadOption.onChange(info);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>点击上传</div>
    </div>
  );

  return (
    <Upload
      accept={props.column.uploadOption?.accept}
      name={props.column?.uploadOption?.name || "file"}
      listType={props.column?.uploadOption?.listType || "picture-card"}
      showUploadList={props.column?.uploadOption?.showUploadList || false}
      action={props.column?.uploadOption?.action}
      headers={props.column?.uploadOption?.headers}
      beforeUpload={props.column?.uploadOption?.beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
    </Upload>
  );
};

export default FormItemUpload;