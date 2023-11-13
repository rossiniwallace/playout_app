import {Container, Content} from "./styles";
import {Highlight} from "../../components/Highlight";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button"
import {Header} from "../../components/Header";
import {Keyboard, TouchableWithoutFeedback} from "react-native";
import {useState} from "react";
import {api} from "../../service/api";

export function Register() {
    const [name,setName] = useState<String>("");
    const [username,setUsername] = useState<String>("");
    const [phoneNumber,setPhoneNumber] = useState<String>("");
    const [password,setPassword] = useState<String>("");

    async function handleRegister(){
        const user = {
            name, username, phoneNumber,password, role:"ClIENT"
        }

        await api.post("/auth/register",user).then(({data}) => {
            console.log(data)
        }).catch(error  => {
            console.log(error)
        })
    }

    return (
        <Container>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                <>
                    <Header showBackButton/>
                    <Highlight title={"Criar Conta"} subtitle={""}/>

                    <Content>
                        <Input placeholder={"Nome Completo"} onChangeText={text => setName(text)}/>
                        <Input placeholder={"Username"} onChangeText={text => setUsername(text)}/>
                        <Input placeholder={"Celular"} onChangeText={text => setPhoneNumber(text)}  keyboardType={"phone-pad"}/>
                        <Input placeholder={"Senha"} onChangeText={text => setPassword(text)} secureTextEntry/>
                        <Button title={"Cadastrar"} onPress={handleRegister}/>
                    </Content></>
            </TouchableWithoutFeedback>
        </Container>
    )
}