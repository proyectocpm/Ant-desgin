import React from "react";
import { SwitcherOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Select } from "antd";

export default function Componentes5() {
  const { Option } = Select;

  return (
    <div>
      <Input
        placeholder="Basic usage"
        size="small"
        prefix={<SwitcherOutlined />}
      />

      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </div>
  );
}
