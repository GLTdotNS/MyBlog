export const  downloadPdf = (path , name) => {
    
    const a = document.createElement('a')
    a.href = path;
    a.download = name;
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
             
}

