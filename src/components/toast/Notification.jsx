import { AlertTriangle, Info, CheckCircle2, XCircle } from "lucide-react";


function Notification({ type, description }) {

    const typeNotification = type;

    if (typeNotification == 'Error') {
        return (
            <div className="flex items-center gap-5 w-[400px] h-[80px] pl-5 border-l-[10px] border-red-500 rounded-lg shadow-lg">
                <AlertTriangle className="stroke-red-500" />
                <div>
                    <p className="text-lg font-semibold">Erro</p>
                    <p className="text-gray-400">{description}</p>
                </div>
            </div>
        )
    } else if (typeNotification == 'Info') {
        return (
            <div className="flex items-center gap-5 w-[400px] h-[80px] pl-5 border-l-[10px] border-blue-500 rounded-lg shadow-lg">
                <Info className="stroke-blue-500" />
                <div>
                    <p className="text-lg font-semibold">Info</p>
                    <p className="text-gray-400">{description}</p>
                </div>
            </div>
        )
    } else if (typeNotification == 'Success') {
        return (
            <div className="flex items-center gap-5 w-[400px] h-[80px] pl-5 border-l-[10px] border-green-500 rounded-lg shadow-lg">
                <CheckCircle2 className="stroke-green-500" />
                <div>
                    <p className="text-lg font-semibold">Sucesso</p>
                    <p className="text-gray-400">{description}</p>
                </div>
            </div>
        )
    } else if (typeNotification == 'Warning') {
        return (
            <div className="flex items-center gap-5 w-[400px] h-[80px] pl-5 border-l-[10px] border-orange-500 rounded-lg shadow-lg">
                <XCircle className="stroke-orange-500" />
                <div>
                    <p className="text-lg font-semibold">Aviso</p>
                    <p className="text-gray-400">{description}</p>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Notification;