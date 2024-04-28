import { useState } from "react";
import { fetchWeather } from "../api";
import { format, parseISO } from "date-fns";
import {
    Container,
    InputContainer,
    Input,
    Select,
    Button,
    WeatherDayContainer,
    WeatherDay,
    MaxTemp,
    MinTemp,
    ChanceOfRain,
    ErrorMessage,
} from "./styles";

const Weather = () => {
    const [formData, setFormData] = useState({ city: "", uf: "" });
    const [searchedCity, setSearchedCity] = useState("");
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchWeather(formData.city, formData.uf);
            if (Array.isArray(data.forecast)) {
                setWeatherData(data.forecast);
                setSearchedCity(formData.city);
            } else {
                throw new Error("Forecast data is not an array");
            }
            setFormData({ city: "", uf: "" });
        } catch (error) {
            setError("Erro ao buscar os dados do clima.");
        }
        setLoading(false);
    };

    return (
        <Container>
            <InputContainer>
                <Input
                    type="text"
                    placeholder="Cidade"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />
                <Select name="uf" value={formData.uf} onChange={handleChange}>
                    <option value="" style={{ fontWeight: "bold" }}>
                        Selecione a UF
                    </option>
                    {/* Lista das opções de estados */}
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </Select>
            </InputContainer>
            <Button disabled={loading} onClick={handleSubmit}>
                {loading ? "Buscando..." : "Buscar"}
            </Button>
            {loading && <p>Carregando...</p>} {/* Mostrar mensagem de carregamento */}
            {error && <ErrorMessage>{error}</ErrorMessage>} {/* Tratamento de erros */}

            {weatherData.length > 0 ? (
                <div>
                    {weatherData.slice(0, 3).map((day, index) => (
                        <WeatherDayContainer key={index}>
                            <WeatherDay>
                                {/* Formatar a data no formato DD/MM/YYYY */}
                                <h3>{searchedCity} - {format(parseISO(day.date), "dd/MM/yyyy")}</h3>
                                <p>Temperatura Máxima: <MaxTemp>{day.day.maxtemp_c}°C</MaxTemp></p>
                                <p>Temperatura Mínima: <MinTemp>{day.day.mintemp_c}°C</MinTemp></p>
                                <p>Possibilidade de Chuva: <ChanceOfRain>{day.day.daily_chance_of_rain}%</ChanceOfRain></p>
                            </WeatherDay>
                        </WeatherDayContainer>
                    ))}
                </div>
            ) : (
                <p>Os dados do clima não estão disponíveis.</p>
            )}
        </Container>
    );
};

export default Weather;
