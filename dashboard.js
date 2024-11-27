document.addEventListener('DOMContentLoaded', function() {
    // Selección de los módulos y las tablas correspondientes
    const venta = document.getElementById('venta');
    const ventaTable = document.getElementById('venta-table');
    const anulacion = document.getElementById('anulacion');
    const anulacionTable = document.getElementById('anulacion-table');
    const cierre = document.getElementById('cierre');
    const cierreTable = document.getElementById('cierre-table');
    const configuracion = document.getElementById('configuracion');
    const configuracionTable = document.getElementById('configuracion-table');
    const proveedor = document.getElementById('proveedor');
    const proveedorTable = document.getElementById('proveedor-table');
    const inventario = document.getElementById('inventario');
    const inventarioTable = document.getElementById('inventario-table');

    // Función para alternar la visibilidad de las tablas
    function toggleTable(table) {
        if (table.style.display === 'none' || table.style.display === '') {
            table.style.display = 'block';
        } else {
            table.style.display = 'none';
        }
    }

    // Verificar si los elementos existen antes de agregar los eventos
    if (venta && ventaTable) {
        venta.addEventListener('click', function() {
            toggleTable(ventaTable);
        });
    }

    if (anulacion && anulacionTable) {
        anulacion.addEventListener('click', function() {
            toggleTable(anulacionTable);
        });
    }

    if (cierre && cierreTable) {
        cierre.addEventListener('click', function() {
            toggleTable(cierreTable);
        });
    }

    if (configuracion && configuracionTable) {
        configuracion.addEventListener('click', function() {
            toggleTable(configuracionTable);
        });
    }

    if (proveedor && proveedorTable) {
        proveedor.addEventListener('click', function() {
            toggleTable(proveedorTable);
        });
    }

    if (inventario && inventarioTable) {
        inventario.addEventListener('click', function() {
            toggleTable(inventarioTable);
        });
    }
});
