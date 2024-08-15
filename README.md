### Section-1 :Frontend (React)
  - **File Upload**: A React component was created to handle file uploads via a form. This component interacts with the backend using `fetch / axios` to send files and receive summarized 
     text.
 - **Display**: The frontend was designed to display both the uploaded file's content and the summary returned by the backend, ensuring a user-friendly experience.
   **Approach**
   **1**.Set Up a React Application:

       The React application was set up using Create React App for rapid development and ease of use.
       The application structure was kept modular with components for file upload, summary display, and API interaction.
   **2**.Create a Form for File Uploads:
        A file upload component was created with support for different file types (PDF, DOCX, TXT).
        The form was integrated with the backend using fetch and axios to send the uploaded file to the server.

   **3**.Implement API Calls for File Upload and Summarization:
         API calls were implemented to first upload the file and then request the summarization.
         The component tracks the upload and summarization processes, providing feedback to the user.
         CORS Issues:

      - **challenge faced In(Frontend) File Handling**: CORS (Cross-Origin Resource Sharing) errors occurred when the frontend tried to communicate with the backend.

 
### Section-2: Backend (Express.js)    
 **File Handling**: The backend was set up using Express.js, a popular web framework for Node.js. We used `express-fileupload` to handle file uploads. This middleware was chosen for 
                      its simplicity and ease of integration.
          **Routing**: A separate router (`fileHandler.js`) was created to handle file-related operations. This router was then mounted on the main application, allowing for modular code 
                 organization.
          **Concurrent Requests** : Express.js inherently supports handling multiple concurrent requests. To ensure scalability, middleware was used to efficiently process incoming 
                                    requests  without blocking the event loop. 
                             
 **Challenge faced in Backend**:
 
  **In File Handling** :
  
        **Challenge** :  Handling various file types (PDF, DOCX, TXT) and ensuring they were processed correctly.
        **Solution**: `express-fileupload` was chosen due to its simplicity and effectiveness in handling multipart file uploads. The files were saved to a specific directory, and errors 
                         were managed using try-catch blocks
          
  **In Concurrent Request Handling**:
  
        **Challenge**: Ensuring the backend could handle multiple concurrent requests without performance degradation.
        **Solution**:  Leveraged Node.js's non-blocking I/O and asynchronous capabilities. The architecture was designed to avoid bottlenecks, and stress testing was conducted to 
                         validate  the server’s performance under load.
          

 
