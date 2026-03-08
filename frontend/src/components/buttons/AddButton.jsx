import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";

export default function AddButton(){
    return(
        <button>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
    )
}