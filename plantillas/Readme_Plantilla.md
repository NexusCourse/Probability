# 📄 Modificación de la Plantilla en Overleaf

Este documento explica cómo utilizar y modificar la plantilla en Overleaf para generar tu lección personalizada.

---

## 📥 Descarga de Archivos

Para comenzar, descarga los archivos necesarios desde nuestro repositorio:
- `main.tex`
- `packages.tex`

Una vez descargados, accede a [Overleaf](https://www.overleaf.com/) y crea un nuevo proyecto.

---

## 📤 Carga de Archivos a Overleaf

1. Inicia sesión en Overleaf y crea un nuevo proyecto en blanco.
2. Sube los archivos descargados (`main.tex` y `packages.tex`). Para ello:
   - Haz clic en el ícono de "Subir" en la barra lateral izquierda.
   - Selecciona los archivos y súbelos.

---

## ✏️ Edición y Personalización

### 1️⃣ Modificación de `main.tex`
Este archivo es el documento principal donde se estructura el contenido de la lección. Puedes modificarlo de la siguiente manera:
- Cambia el nombre principal de la lección en la línea:
  ```latex
  \title{\textcolor{green1}{\textbf{PLANTILLA DE EJEMPLO}}}
  ```
- Modifica la lección que estas generando.
  ```latex
  \textbf{CURSO \# ( Nombre del Curso)} \\ 
  \vspace{0.5em}
  \textit{PARTE \# / LECCIÓN \#} 
  ```
- Utiliza nuestro entornos, por ejemplo con:
  ```latex
  \begin{theorem}[Aqui el nombre del teorema.]
  Aquí dentro va el teorema.
  \end{theorem}
  ```


### 2️⃣ Modificación de `packages.tex`
Este archivo contiene los paquetes que se utilizan en la plantilla. Solo edítalo si necesitas agregar nuevas funcionalidades. Si deseas incluir un nuevo paquete, agrégalo al final del archivo con:

```latex
\usepackage{nuevo-paquete}
```

---

## 🏗️ Compilación del Documento
Una vez realizadas las modificaciones:
1. Asegúrate de que la configuración de compilación esté en `pdfLaTeX`.
2. Haz clic en el botón de "Recompilar" para generar tu documento.
3. Descarga el PDF final desde Overleaf.

---

## 💡 Consejos Adicionales
- Guarda una copia de seguridad antes de realizar cambios importantes.
- Puedes compartir tu proyecto con otros colaboradores en Overleaf.
- Si encuentras errores, revisa la consola de Overleaf para identificar posibles problemas de sintaxis.

---

¡Listo! Ahora puedes personalizar tu lección de manera sencilla. 🚀

