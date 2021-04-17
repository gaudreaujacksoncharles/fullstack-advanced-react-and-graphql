import useForm from '../../lib/useForm'
import { WhiteButton } from '../WhiteButton'

export default function EditUserProfilePhoto({mt}) {
    const { handleChange } = useForm()
    return (
        <form>
            <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
            />
        </form>
    )
}