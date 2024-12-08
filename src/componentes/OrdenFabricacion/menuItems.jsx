export const MenuItems = [
    { type: 'divider' },
    {
        icon: 'new-text-box', text: 'Pedidos', path: '/fabrica/pedidos', subItems: [
            { text: 'Pedido de Compras', path: '/fabrica/pedidos/pedidosCompras' },
            { text: 'Pedidos de Ventas', path: '/fabrica/pedidos/pedidosVentas' }
        ]
    },
    {
        icon: 'new-text-box', text: 'Gestion OFs', path: '/fabrica/gestionOfs', subItems: [
            { text: 'Lista de Ofs', path: '/fabrica/gestionOfs/listaOfs' },
            { text: 'Arbol de Ofs', path: '/fabrica/gestionOfs/arbolOfs' },
            { text: 'Ofs pendientes de corrección', path: '/fabrica/gestionOfs/ofsPendientesCorreccion' },
            { text: 'Graficas', path: '/fabrica/gestionOfs/graficas' }
        ]
    },
    { icon: 'new-text-box', text: 'Admin', path: '/fabrica/admin' },
    { icon: 'new-text-box', text: 'Usuarios', path: '/fabrica/usuarios' },
    { icon: 'new-text-box', text: 'Notificaciones', path: '/fabrica/notificaciones' },
    { icon: 'new-text-box', text: 'Secuenciador', path: '/fabrica/secuenciador' },
    { icon: 'new-text-box', text: 'WIP', path: '/fabrica/wip' },
    { icon: 'new-text-box', text: 'Fases', path: '/fabrica/fases' },
    { icon: 'new-text-box', text: 'Personal', path: '/fabrica/personal' },
    { icon: 'new-text-box', text: 'Graficas', path: '/fabrica/graficasOf' },
    { icon: 'new-object', text: 'Analisis', path: '/fabrica/analisis' },
    { icon: 'new-link', text: 'Crear', path: '/fabrica/crearOF' },
    { type: 'divider' }
]