import { useState } from "react";
import { Button } from "primereact/button";
import { PanelMenu } from "primereact/panelmenu";
import styles from "./ConverterButtons.module.css";

export default function Controlled() {
  const items = [
    {
      key: "0",
      label: "Transformar",
      icon: "pi pi-users",
      items: [
        {
          key: "0_1",
          label: "CSV a Separador",
        },
        {
          key: "0_2",
          label: "SAV a CSV",
        },
        {
          key: "0_3",
          label: "TXT a CSV",
        },
        {
          key: "0_4",
          label: "XLS a CDV columnas",
        },
        {
          key: "0_5",
          label: "XLS a CSV",
        },
      ],
    },
    {
      key: "1",
      label: "Unir",
      icon: "pi pi-server",
      items: [
        {
          key: "1_0",
          label: "CSV a XLS",
        },
        {
          key: "1_1",
          label: "Unir CSV",
        },
      ],
    },
    {
      key: "2",
      label: "Limpiar",
      icon: "pi pi-calendar",
      items: [
        {
          key: "2_0",
          label: "ColJuegos",
          items: [
            {
              key: "2_0_0",
              label: "Disiplinarios",
            },
            {
              key: "2_0_1",
              label: "PQR",
            },
          ],
        },
        {
          key: "2_1",
          label: "DIAN",
          items: [
            {
              key: "2_1_0",
              label: "Disiplinarios",
            },
            {
              key: "2_1_1",
              label: "PQR",
            },
            {
              key: "2_1_2",
              label: "Defensoría",
            },
            {
              key: "2_1_2",
              label: "Notificaciones",
            },
          ],
        },
        {
          key: "2_2",
          label: "UGPP",
          items: [
            {
              key: "2_2_0",
              label: "Disiplinarios",
            },
            {
              key: "2_2_1",
              label: "PQR",
            },
          ],
        },
      ],
    },
  ];

  const [expandedKeys, setExpandedKeys] = useState<any>({});

  const toggleAll = () => {
    if (Object.keys(expandedKeys).length) {
      collapseAll();
    } else {
      expandAll();
    }
  };

  const expandAll = () => {
    items.forEach(expandNode);
    setExpandedKeys({ ...expandedKeys });
  };

  const collapseAll = () => {
    setExpandedKeys({});
  };

  const expandNode = (node: { items: any[]; key: string | number }) => {
    if (node.items && node.items.length) {
      expandedKeys[node.key] = true;
      node.items.forEach(expandNode);
    }
  };

  return (
    <div className={styles.container}>
      <Button
        type="button"
        label="Toggle All"
        text
        onClick={toggleAll}
        className={`${styles.toggleButton} font-mono text-xl`}
      />
      <PanelMenu
        model={items}
        expandedKeys={expandedKeys}
        onExpandedKeysChange={setExpandedKeys}
        className={`${styles.panelMenu} font-mono text-lg` }
        multiple
      />
    </div>
  );
}
