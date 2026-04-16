import streamlit as st
import pandas as pd
import numpy as np

# CONFIG
st.set_page_config(
    page_title="Data Analysis Dashboard",
    layout="wide"
)

# HEADER
st.title("📊 Data Analysis Dashboard")
st.markdown("Análisis exploratorio de datos para la toma de decisiones")

# SIDEBAR
st.sidebar.header("Filtros")

# DATA
data = pd.DataFrame({
    "Mes": ["Ene", "Feb", "Mar", "Abr", "May"],
    "Ventas": np.random.randint(100, 500, 5)
})

# FILTRO
selected = st.sidebar.selectbox("Selecciona un mes", data["Mes"])

filtered_data = data[data["Mes"] == selected]

# KPI
st.subheader("📈 KPI Principal")

ventas_mes = filtered_data["Ventas"].iloc[0]

st.metric("Ventas del mes", int(ventas_mes))

# CHART
st.subheader("📊 Tendencia de ventas")
st.line_chart(data.set_index("Mes"))

# TABLE
st.subheader("📋 Datos")
st.dataframe(data)

# FOOTER
st.markdown("---")
st.markdown("Proyecto desarrollado por Jesús Enrique León Arteaga")