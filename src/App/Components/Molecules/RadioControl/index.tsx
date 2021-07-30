import { Radio } from "antd"
import { GeneralControlProps } from "types/interfaces"

const RadioControl = ({ hookForm }:GeneralControlProps) => {
    return (
        <Radio.Group onChange={hookForm.field.onChange}>
            <Radio value={1}>
                SI
            </Radio>
            <Radio value={2}>
                NO
            </Radio>            
        </Radio.Group>
    )
}

export default RadioControl
