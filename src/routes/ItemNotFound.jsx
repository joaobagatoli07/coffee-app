function ItemNotFound() {
    return (
        <div className="bg-amber-950 p-6 rounded-md">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-white">Nenhum item encontrado</h3>
                    <p className="text-amber-200">Parece que nenhum item corresponde ao filtro aplicado</p>
                </div>
            </div>
        </div>
    )
}

export default ItemNotFound;