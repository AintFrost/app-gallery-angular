// import { BlobServiceClient } from '@azure/storage-blob';

// // Create a BlobServiceClient instance
// const blobServiceClient = BlobServiceClient.fromConnectionString('your-connection-string');

// // Get a reference to the container and folder in the Azure Blob Storage
// const containerClient = blobServiceClient.getContainerClient('your-container-name');
// const folderName = 'your-folder-name';

// // Fetch the list of blobs (images) in the folder
// const blobs = await containerClient.listBlobsByHierarchy('/', { prefix: folderName });

// // Extract the URLs of the blobs (images)
// export const IMAGES: string[] = blobs.segment.blobItems.map(blob => blob.url);


//-----------------------------------------------------------------------------------
// export const IMAGES: string[] = [
//     'https://your-sharepoint-site-url.com/sites/your-site-name/_api/web/GetFolderByServerRelativeUrl(\'/sites/your-site-name/Shared%20Documents\')/Files(\'Image1.jpg\')/\$value',
//     'https://your-sharepoint-site-url.com/sites/your-site-name/_api/web/GetFolderByServerRelativeUrl(\'/sites/your-site-name/Shared%20Documents\')/Files(\'Image2.jpg\')/\$value',
//     'https://your-sharepoint-site-url.com/sites/your-site-name/_api/web/GetFolderByServerRelativeUrl(\'/sites/your-site-name/Shared%20Documents\')/Files(\'Image3.jpg\')/\$value',
//     'https://your-sharepoint-site-url.com/sites/your-site-name/_api/web/GetFolderByServerRelativeUrl(\'/sites/your-site-name/Shared%20Documents\')/Files(\'Image4.jpg\')/\$value'
//   ];

//-----------------------------------------------------------------------------------

export const IMAGES: string[] = [
    'https://plus.unsplash.com/premium_photo-1669401555472-b1e8195442c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1501696088263-5696c92364bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    'https://plus.unsplash.com/premium_photo-1669401555472-b1e8195442c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1501696088263-5696c92364bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    'https://plus.unsplash.com/premium_photo-1669401555472-b1e8195442c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1501696088263-5696c92364bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    'https://plus.unsplash.com/premium_photo-1669401555472-b1e8195442c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
    'https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',

  ];
  