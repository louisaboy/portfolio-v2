
export const handleClickToCV = () => {
    {/* <a className="vvd" role="button" href="src/components/Allen-Aboy-CV-2023.pdf" download="Allen-Aboy-CV-2023.pdf"><span>Download </span></a> */ }
    const url = "./Allen Aboy Curriculum Vitae 2024.pdf"
    const fileName = "Allen Aboy Curriculum Vitae 2024.pdf"
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            // Create a new Blob object for the file
            const fileURL = window.URL.createObjectURL(blob);

            // Create a temporary link element
            const tempLink = document.createElement('a');
            tempLink.href = fileURL;
            tempLink.target = "_blank"
            tempLink.download = fileName;  // Set the file name for download

            // Simulate a click on the link to trigger the download
            tempLink.click();

            // Clean up the URL object after the download
            window.URL.revokeObjectURL(fileURL);
        })
        .catch(error => {
            console.error('Error downloading the PDF:', error);
        });

}