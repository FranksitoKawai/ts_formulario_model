import { Input, Radio } from "antd"
import { Row } from "mylibs/Util-Styled-Components/src"
import { GeneralControlProps } from "types/interfaces"

const RadioInputControl = ({hookForm}:GeneralControlProps) => {
    return (
        <Row>
            <Radio.Group onChange={hookForm.field.onChange}>
                <Radio value={1}>
                    SI
                </Radio>
                <Radio value={2}>
                    NO
                </Radio>
            </Radio.Group>
            <Input/>
        </Row>
    )
}

export default RadioInputControl
