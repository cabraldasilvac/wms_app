import { ScrollView } from 'react-native'
import { Container, Logo, ImageLogo } from './app/src/styles/custom'

export default function App() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>
                {/* Carregar a Logo */}
                <Logo>
                    <ImageLogo></ImageLogo>
                </Logo>
            </Container>
        </ScrollView>
    )
}
