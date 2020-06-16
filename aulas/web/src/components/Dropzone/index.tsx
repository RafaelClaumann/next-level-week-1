import React, { useCallback, useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import { useDropzone } from 'react-dropzone'
import './styles.css'

interface Props {
  onFileUpload: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUpload }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('')

  const onDrop = useCallback(acceptedFiles => {
    setSelectedFileUrl(URL.createObjectURL(acceptedFiles[0]))
    onFileUpload(acceptedFiles[0])
  }, [onFileUpload])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />
      {selectedFileUrl
        ? <img src={selectedFileUrl} alt="thumbnail" />
        : (
          <p>
            <FiUpload />
            Foto do Estabelecimento
          </p>
        )}
    </div>
  )
}

export default Dropzone
