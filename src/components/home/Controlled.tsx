import { saveAs } from "file-saver";
import { useState } from "react";
import { Button } from "primereact/button";
import { PanelMenu } from "primereact/panelmenu";
import styles from "./ConverterButtons.module.css";

export default function Controlled() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const items = [
    {
      key: "0",
      label: "Transformar",
      icon: "pi pi-users",
      items: [
        {
          key: "0_1",
          label: "CSV a Separador",
          command: async () => {
            setLoading(true);
            setError("");
            try {
              const files = window.uploadedFiles || [];
              if (!files.length) {
                throw new Error("No hay archivos para convertir");
              }
              // Pedir separadores al usuario
              const antiguo_separador =
                prompt("¿Cuál es el separador actual? (ejemplo: |@)", "|@") ||
                "|@";
              const nuevo_separador =
                prompt("¿Cuál es el nuevo separador? (ejemplo: |)", "|") || "|";
              const formData = new FormData();
              files.forEach((file) => {
                formData.append("files", file);
              });
              formData.append("antiguo_separador", antiguo_separador);
              formData.append("nuevo_separador", nuevo_separador);
              const response = await fetch(
                "http://localhost:8000/api/v1/csv-a-otro-separador-upload/",
                {
                  method: "POST",
                  body: formData,
                },
              );
              if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Error al convertir CSV");
              }
              const blob = await response.blob();
              saveAs(blob, "csv_convertidos.zip");
            } catch (err: any) {
              setError(err.message || "Error inesperado");
            } finally {
              setLoading(false);
            }
          },
        },
        {
          key: "0_2",
          label: "SAV a CSV",
          command: async () => {
            setLoading(true);
            setError("");
            try {
              const files = window.uploadedFiles || [];
              if (!files.length) {
                throw new Error("No hay archivos .sav para convertir");
              }
              const formData = new FormData();
              files.forEach((file) => {
                if (file.name.toLowerCase().endsWith(".sav")) {
                  formData.append("files", file);
                }
              });
              if (!formData.has("files")) {
                throw new Error("Debes subir archivos con extensión .sav");
              }
              const response = await fetch(
                "http://localhost:8000/api/v1/sav-a-csv-upload/",
                {
                  method: "POST",
                  body: formData,
                },
              );
              if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                  errorData.error || "Error al convertir SAV a CSV",
                );
              }
              const blob = await response.blob();
              saveAs(blob, "csv_convertidos.zip");
            } catch (err: any) {
              setError(err.message || "Error inesperado");
            } finally {
              setLoading(false);
            }
          },
        },
        {
          key: "0_3",
          label: "TXT a CSV",
          command: async () => {
            setLoading(true);
            setError("");
            try {
              const files = window.uploadedFiles || [];
              if (!files.length) {
                throw new Error("No hay archivos .txt para convertir");
              }
              // Pedir separadores al usuario
              const separador_entrada =
                prompt("¿Cuál es el separador de entrada? (ejemplo: |)", "|") ||
                "|";
              const separador_salida =
                prompt("¿Cuál es el separador de salida? (ejemplo: |)", "|") ||
                "|";
              const formData = new FormData();
              files.forEach((file) => {
                if (file.name.toLowerCase().endsWith(".txt")) {
                  formData.append("files", file);
                }
              });
              if (!formData.has("files")) {
                throw new Error("Debes subir archivos con extensión .txt");
              }
              formData.append("separador_entrada", separador_entrada);
              formData.append("separador_salida", separador_salida);
              const response = await fetch(
                "http://localhost:8000/api/v1/txt-a-csv-upload/",
                {
                  method: "POST",
                  body: formData,
                },
              );
              if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                  errorData.error || "Error al convertir TXT a CSV",
                );
              }
              const blob = await response.blob();
              saveAs(blob, "csv_convertidos.zip");
            } catch (err: any) {
              setError(err.message || "Error inesperado");
            } finally {
              setLoading(false);
            }
          },
        },
        {
          key: "0_4",
          label: "XLS a CDV columnas",
          command: async () => {
            setLoading(true);
            setError("");
            try {
              const files = window.uploadedFiles || [];
              if (!files.length) {
                throw new Error("No hay archivos .xlsx para convertir");
              }
              const separador_salida =
                prompt("¿Cuál es el separador de salida? (ejemplo: |)", "|") ||
                "|";
              const formData = new FormData();
              files.forEach((file) => {
                if (file.name.toLowerCase().endsWith(".xlsx")) {
                  formData.append("files", file);
                }
              });
              if (!formData.has("files")) {
                throw new Error("Debes subir archivos con extensión .xlsx");
              }
              formData.append("separador_salida", separador_salida);
              const response = await fetch(
                "http://localhost:8000/api/v1/xlsx-a-csv-upload/",
                {
                  method: "POST",
                  body: formData,
                },
              );
              if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                  errorData.error || "Error al convertir XLSX a CSV",
                );
              }
              const blob = await response.blob();
              saveAs(blob, "csv_convertidos.zip");
            } catch (err: any) {
              setError(err.message || "Error inesperado");
            } finally {
              setLoading(false);
            }
          },
        },
        {
          key: "0_5",
          label: "XLS a CSV",
          command: async () => {
            setLoading(true);
            setError("");
            try {
              const files = window.uploadedFiles || [];
              if (!files.length) {
                throw new Error("No hay archivos .xlsx para convertir");
              }
              const separador_salida =
                prompt("¿Cuál es el separador de salida? (ejemplo: |)", "|") ||
                "|";
              const formData = new FormData();
              files.forEach((file) => {
                if (file.name.toLowerCase().endsWith(".xlsx")) {
                  formData.append("files", file);
                }
              });
              if (!formData.has("files")) {
                throw new Error("Debes subir archivos con extensión .xlsx");
              }
              formData.append("separador_salida", separador_salida);
              const response = await fetch(
                "http://localhost:8000/api/v1/xlsx-a-csv-con-columna-mes-de-reporte-upload/",
                {
                  method: "POST",
                  body: formData,
                },
              );
              if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                  errorData.error || "Error al convertir XLSX a CSV",
                );
              }
              const blob = await response.blob();
              saveAs(blob, "csv_convertidos.zip");
            } catch (err: any) {
              setError(err.message || "Error inesperado");
            } finally {
              setLoading(false);
            }
          },
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
          label: "UnirCSV a XLS",
          command: async () => {
            setLoading(true);
            setError("");
            try {
              const files = window.uploadedFiles || [];
              if (!files.length) {
                throw new Error("No hay archivos .csv para unir en Excel");
              }
              const separador_salida =
                prompt("¿Cuál es el separador de los CSV? (ejemplo: |)", "|") ||
                "|";
              const formData = new FormData();
              files.forEach((file) => {
                if (file.name.toLowerCase().endsWith(".csv")) {
                  formData.append("files", file);
                }
              });
              if (!formData.has("files")) {
                throw new Error("Debes subir archivos con extensión .csv");
              }
              formData.append("separador_salida", separador_salida);
              const response = await fetch(
                "http://localhost:8000/api/v1/unir-archivos-csv-en-xlsx-upload/",
                {
                  method: "POST",
                  body: formData,
                },
              );
              if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                  errorData.error || "Error al unir CSV en Excel",
                );
              }
              const blob = await response.blob();
              saveAs(blob, "consolidado_xlsx.zip");
            } catch (err: any) {
              setError(err.message || "Error inesperado");
            } finally {
              setLoading(false);
            }
          },
        },
        {
          key: "1_1",
          label: "Unir CSV",
          command: async () => {
            setLoading(true);
            setError("");
            try {
              const files = window.uploadedFiles || [];
              if (!files.length) {
                throw new Error("No hay archivos para unir");
              }
              const formData = new FormData();
              files.forEach((file) => {
                formData.append("files", file);
              });
              const response = await fetch("http://localhost:8000/unir-csv", {
                method: "POST",
                body: formData,
              });
              if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Error al unir CSV");
              }
              const blob = await response.blob();
              saveAs(blob, "consolidado_coljuegos_pqr_2021.csv");
            } catch (err: any) {
              setError(err.message || "Error inesperado");
            } finally {
              setLoading(false);
            }
          },
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
              command: async () => {
                setLoading(true);
                setError("");
                try {
                  const files = window.uploadedFiles || [];
                  if (!files.length) {
                    throw new Error("No hay archivos .csv para procesar");
                  }
                  // Solo se permite un archivo para este proceso
                  const file = files.find((f) =>
                    f.name.toLowerCase().endsWith(".csv"),
                  );
                  if (!file) {
                    throw new Error(
                      "Debes subir un archivo con extensión .csv",
                    );
                  }
                  const nombre_archivo_salida =
                    prompt(
                      "Nombre del archivo de salida procesado:",
                      file.name.replace(".csv", "_procesado.csv"),
                    ) || file.name.replace(".csv", "_procesado.csv");
                  const nombre_archivo_errores =
                    prompt(
                      "Nombre del archivo de errores:",
                      file.name.replace(".csv", "_errores_procesamiento.csv"),
                    ) ||
                    file.name.replace(".csv", "_errores_procesamiento.csv");
                  const formData = new FormData();
                  formData.append("file", file);
                  formData.append(
                    "nombre_archivo_salida",
                    nombre_archivo_salida,
                  );
                  formData.append(
                    "nombre_archivo_errores",
                    nombre_archivo_errores,
                  );
                  const response = await fetch(
                    "http://localhost:8000/api/v1/normalizar-columnas/coljuegos/disciplinarios/upload/",
                    {
                      method: "POST",
                      body: formData,
                    },
                  );
                  if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(
                      errorData.error || "Error al procesar el archivo",
                    );
                  }
                  const blob = await response.blob();
                  saveAs(blob, "archivos_procesados.zip");
                } catch (err: any) {
                  setError(err.message || "Error inesperado");
                } finally {
                  setLoading(false);
                }
              },
            },
            {
              key: "2_0_1",
              label: "PQR",
              command: async () => {
                setLoading(true);
                setError("");
                try {
                  const files = window.uploadedFiles || [];
                  if (!files.length) {
                    throw new Error("No hay archivos .csv para procesar");
                  }
                  // Solo se permite un archivo para este proceso
                  const file = files.find((f) =>
                    f.name.toLowerCase().endsWith(".csv"),
                  );
                  if (!file) {
                    throw new Error(
                      "Debes subir un archivo con extensión .csv",
                    );
                  }
                  const nombre_archivo_salida =
                    prompt(
                      "Nombre del archivo de salida procesado:",
                      file.name.replace(".csv", "_procesado.csv"),
                    ) || file.name.replace(".csv", "_procesado.csv");
                  const nombre_archivo_errores =
                    prompt(
                      "Nombre del archivo de errores:",
                      file.name.replace(".csv", "_errores_procesamiento.csv"),
                    ) ||
                    file.name.replace(".csv", "_errores_procesamiento.csv");
                  const formData = new FormData();
                  formData.append("file", file);
                  formData.append(
                    "nombre_archivo_salida",
                    nombre_archivo_salida,
                  );
                  formData.append(
                    "nombre_archivo_errores",
                    nombre_archivo_errores,
                  );
                  const response = await fetch(
                    "http://localhost:8000/api/v1/normalizar-columnas/coljuegos/pqr/upload/",
                    {
                      method: "POST",
                      body: formData,
                    },
                  );
                  if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(
                      errorData.error || "Error al procesar el archivo",
                    );
                  }
                  const blob = await response.blob();
                  saveAs(blob, "archivos_procesados.zip");
                } catch (err: any) {
                  setError(err.message || "Error inesperado");
                } finally {
                  setLoading(false);
                }
              },
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
              command: async () => {
                setLoading(true);
                setError("");
                try {
                  const files = window.uploadedFiles || [];
                  if (!files.length) {
                    throw new Error("No hay archivos .csv para procesar");
                  }
                  // Solo se permite un archivo para este proceso
                  const file = files.find((f) =>
                    f.name.toLowerCase().endsWith(".csv"),
                  );
                  if (!file) {
                    throw new Error(
                      "Debes subir un archivo con extensión .csv",
                    );
                  }
                  const nombre_archivo_salida =
                    prompt(
                      "Nombre del archivo de salida procesado:",
                      file.name.replace(".csv", "_procesado.csv"),
                    ) || file.name.replace(".csv", "_procesado.csv");
                  const nombre_archivo_errores =
                    prompt(
                      "Nombre del archivo de errores:",
                      file.name.replace(".csv", "_errores_procesamiento.csv"),
                    ) ||
                    file.name.replace(".csv", "_errores_procesamiento.csv");
                  const formData = new FormData();
                  formData.append("file", file);
                  formData.append(
                    "nombre_archivo_salida",
                    nombre_archivo_salida,
                  );
                  formData.append(
                    "nombre_archivo_errores",
                    nombre_archivo_errores,
                  );
                  const response = await fetch(
                    "http://localhost:8000/api/v1/normalizar-columnas/Dian/disciplinarios/upload/",
                    {
                      method: "POST",
                      body: formData,
                    },
                  );
                  if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(
                      errorData.error || "Error al procesar el archivo",
                    );
                  }
                  const blob = await response.blob();
                  saveAs(blob, "archivos_procesados.zip");
                } catch (err: any) {
                  setError(err.message || "Error inesperado");
                } finally {
                  setLoading(false);
                }
              },
            },
            {
              key: "2_1_1",
              label: "PQR",
              command: async () => {
                setLoading(true);
                setError("");
                try {
                  const files = window.uploadedFiles || [];
                  if (!files.length) {
                    throw new Error("No hay archivos .csv para procesar");
                  }
                  // Solo se permite un archivo para este proceso
                  const file = files.find((f) =>
                    f.name.toLowerCase().endsWith(".csv"),
                  );
                  if (!file) {
                    throw new Error(
                      "Debes subir un archivo con extensión .csv",
                    );
                  }
                  const nombre_archivo_salida =
                    prompt(
                      "Nombre del archivo de salida procesado:",
                      file.name.replace(".csv", "_procesado.csv"),
                    ) || file.name.replace(".csv", "_procesado.csv");
                  const nombre_archivo_errores =
                    prompt(
                      "Nombre del archivo de errores:",
                      file.name.replace(".csv", "_errores_procesamiento.csv"),
                    ) ||
                    file.name.replace(".csv", "_errores_procesamiento.csv");
                  const formData = new FormData();
                  formData.append("file", file);
                  formData.append(
                    "nombre_archivo_salida",
                    nombre_archivo_salida,
                  );
                  formData.append(
                    "nombre_archivo_errores",
                    nombre_archivo_errores,
                  );
                  const response = await fetch(
                    "http://localhost:8000/api/v1/normalizar-columnas/Dian/pqr/upload/",
                    {
                      method: "POST",
                      body: formData,
                    },
                  );
                  if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(
                      errorData.error || "Error al procesar el archivo",
                    );
                  }
                  const blob = await response.blob();
                  saveAs(blob, "archivos_procesados.zip");
                } catch (err: any) {
                  setError(err.message || "Error inesperado");
                } finally {
                  setLoading(false);
                }
              },
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
      {loading && (
        <div style={{ color: "blue" }}>Procesando consolidado...</div>
      )}
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
      <PanelMenu
        model={items}
        expandedKeys={expandedKeys}
        onExpandedKeysChange={setExpandedKeys}
        className={`${styles.panelMenu} font-mono text-lg`}
        multiple
      />
    </div>
  );
}
