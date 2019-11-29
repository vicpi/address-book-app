Checkbox:
```js
import { useState } from 'react'

const CheckboxParentComponent = () => {
    const [checked, setChecked] = useState(false)
    return <Checkbox name="name"
                     label="Label"
                     checked={checked}
                     onChange={() => setChecked(!checked)} />
}

<CheckboxParentComponent />
```