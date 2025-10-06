import Button from "@mui/material/Button";
import style from './Btn.module.css';


const Btn = ({text}) => {
    return <>
        <Button sx={{ fontFamily: 'Poppins' }} className={style.btn}>{text}</Button>
    </>
}
export default Btn;
