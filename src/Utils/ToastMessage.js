import { toast } from "react-toastify";


const successMessage = () => {
    toast.success('LOGIN IS SUCCESS', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

export {successMessage};