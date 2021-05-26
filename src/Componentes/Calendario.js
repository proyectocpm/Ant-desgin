import React from 'react'
import { Button } from 'antd';
import { SwitcherOutlined} from '@ant-design/icons';

export default function Calendario() {
    return (
        <div>
            <h1>calendario</h1>
            <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    <SwitcherOutlined  style={{fontSize:'90px',color:'red'}} spin={true}/
    
    >
        </div>
    )
}
