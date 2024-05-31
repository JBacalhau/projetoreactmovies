export function Banner(props){

    function setBackground(){
        if(props.tipo == 'filmes')
            return 'bg-banner-filmes';

        else if(props.tipo == 'series')
            return 'bg-banner-series';

        else return 'bg-banner-home';
    }

return(
    <div className={`${setBackground()} h-[330px] bg-cover flex flex-col justify-center items-center text-center text-white`}>
        <h1 className="text-5xl font-bold">{props.titulo}</h1>
        {props.children}
    </div>
)

}