(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ReservaForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ReservaForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ReservaForm() {
    _s();
    const [dentists, setDentists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nombrePaciente: '',
        correo: '',
        motivo: '',
        fecha: '',
        horario: '',
        odontologoId: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReservaForm.useEffect": ()=>{
            fetch('/data/dentists.json').then({
                "ReservaForm.useEffect": (res)=>res.json()
            }["ReservaForm.useEffect"]).then({
                "ReservaForm.useEffect": (data)=>setDentists(data)
            }["ReservaForm.useEffect"]);
        }
    }["ReservaForm.useEffect"], []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const nuevaReserva = {
            ...form,
            id: crypto.randomUUID(),
            estado: 'pendiente'
        };
        const res = await fetch('/api/reservas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaReserva)
        });
        if (res.ok) {
            alert('Reserva creada correctamente 🎉');
            setForm({
                nombrePaciente: '',
                correo: '',
                motivo: '',
                fecha: '',
                horario: '',
                odontologoId: ''
            });
        } else {
            alert('Error al crear la reserva ❌');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "max-w-xl mx-auto space-y-4 p-6 bg-white shadow-xl rounded-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-center mb-4",
                children: "Agendar Cita"
            }, void 0, false, {
                fileName: "[project]/src/components/ReservaForm.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "nombrePaciente",
                type: "text",
                placeholder: "Nombre del paciente",
                required: true,
                className: "w-full p-2 border rounded",
                value: form.nombrePaciente,
                onChange: handleChange
            }, void 0, false, {
                fileName: "[project]/src/components/ReservaForm.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "correo",
                type: "email",
                placeholder: "Correo electrónico",
                required: true,
                className: "w-full p-2 border rounded",
                value: form.correo,
                onChange: handleChange
            }, void 0, false, {
                fileName: "[project]/src/components/ReservaForm.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: "motivo",
                placeholder: "Motivo de consulta",
                required: true,
                className: "w-full p-2 border rounded",
                value: form.motivo,
                onChange: handleChange
            }, void 0, false, {
                fileName: "[project]/src/components/ReservaForm.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "fecha",
                type: "date",
                required: true,
                className: "w-full p-2 border rounded",
                value: form.fecha,
                onChange: handleChange
            }, void 0, false, {
                fileName: "[project]/src/components/ReservaForm.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "horario",
                type: "time",
                required: true,
                className: "w-full p-2 border rounded",
                value: form.horario,
                onChange: handleChange
            }, void 0, false, {
                fileName: "[project]/src/components/ReservaForm.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                name: "odontologoId",
                required: true,
                className: "w-full p-2 border rounded",
                value: form.odontologoId,
                onChange: handleChange,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Seleccionar odontólogo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ReservaForm.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    dentists.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: d.id,
                            children: [
                                d.nombre,
                                " – ",
                                d.especialidad
                            ]
                        }, d.id, true, {
                            fileName: "[project]/src/components/ReservaForm.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ReservaForm.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition",
                children: "Reservar cita"
            }, void 0, false, {
                fileName: "[project]/src/components/ReservaForm.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ReservaForm.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(ReservaForm, "iNOMHEidWCrJlObz1RgOgcn2F/c=");
_c = ReservaForm;
var _c;
__turbopack_context__.k.register(_c, "ReservaForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_ReservaForm_tsx_3810a65f._.js.map