import toast from 'react-hot-toast';


export  const copyToClipboard = (text) => {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
     elem.select();
     document.execCommand('copy');
     document.body.removeChild(elem);
     toast.success("Copied", {
        position: "top-center",
        style:{
            border: '1px solid #333',
            padding: '5px',
            color: '#713200',
        },  iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
     });
    
  }