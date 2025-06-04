import toast from 'react-hot-toast';
class FormHelper {
    IsEmpty(value) {
        return value.length === 0;
    }
    IsEmail(value) {
        return !EmailRegx.test(value);
    }
    ErrorToast(msg) {
        toast.error(msg, { position: "top-center" });
    }
    SuccessToast(msg) {
        toast.success(msg, { position: "top-center" });
    }
}
export const {IsEmpty, IsMobile, IsEmail, ErrorToast, getBase64, SuccessToast} = new FormHelper();