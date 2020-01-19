import Input from "../components/Login/Input";
import Button from "../components/Login/Button";
import Bottom from "../components/Login/Bottom";

const Login = () => {
    return (
        <div>
            <div className={'form'}>
                <img src={'/logo.png'} alt={'logo'} width={'60'}/>
                <h2>DH盒子</h2>
                <p>您的数字遗产管家</p>
                <Input/>
                <Input type={'password'}/>
                <Button/>
                <Bottom/>
            </div>
            <style jsx>{`
                .form {
                    width: 100%;
                    max-width: 350px;
                    background: white;
                    margin: 120px auto 0;
                    text-align: center;
                }
                @media (min-width: 600px) {
                    .form {
                        margin-top: 150px;
                    }                
                }
                p {
                    font-size: 1.1rem;
                    margin-bottom: 30px;
                }
            `}</style>
            <style jsx global>{`
                html, body {
                     margin: 0;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    )
}

export default Login