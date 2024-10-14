/*var os_old = {
    "Id": 102588765,
    "Code": "7491209514697639",
    "LimitDate": "2024-09-30T16:00:00",
    "Observation": "Departamento DIRETORIA CAIXA Localidade Operações Loja 1629 WPJ PAJUCARA S-BIG-AL Loja Parceira Bom Preço Sistemas TPLinux - PDV Vamos lá! Nos informe aonde está o seu problema? Travado Nome Completo",
    "ScheduledDate": "2024-09-27T09:09:11.473",
    "StartedAt": "2024-09-27T09:12:35.52",
    "Status": {
        "Id": 16,
        "Code": "Synchronized",
        "Name": "Sincronizada",
        "ChangedAt": "2024-09-27T09:12:35.543"
    },
    "Workspace": {
        "Id": 3902,
        "Code": "21.246.699/0038-36          ",
        "Name": "ALGAR TECNOLOGIA E CONSULTORIA S.A.",
        "Href": "v1/foundation/workspaces/3902"
    },
    "Office": {
        "Id": 6146,
        "Code": "14",
        "Name": "Central",
        "Href": "v1/foundation/offices/6146",
        "Hint": "task.Observation"
    },
    "Address": {
        "Street": "R JANGADEIROS ALAGOANOS",
        "Number": "1300",
        "Complement": "",
        "Neighborhood": "PAJUCARA",
        "City": "MACEIO",
        "StateAcronym": "AL",
        "CountryAcronym": "BR",
        "PostalCode": "57000000",
        "Latitude": 0.0,
        "Longitude": 0.0
    },
    "Workflow": {
        "Id": 93639,
        "Code": "Relatório de Atendimento Técnico",
        "Name": "Atendimento Técnico (Foi gerado uma nova versão)",
        "Href": "v1/foundation/workflows/93639",
        "Hint": "Versão serialização Json, Linguaguem JavaScript e SubFluxo, Inativo",
        "ChangedAt": "2024-09-27T10:28:26.627"
    },
    "Group": {
        "Id": 10277,
        "Code": "1",
        "Name": "Padrão",
        "Href": "v1/movement/tasks/groups/93639",
        "Hint": "True"
    },
    "Customer": {
        "Id": 2248403,
        "Code": "WPJ",
        "Name": "SUPER PAJUCARA",
        "Href": "v1/foundation/customers/2248403",
        "Hint": "Contato: Sem Nome, 11111111111 email@email.com"
    },
    "User": {
        "Id": 108765,
        "Code": "3am",
        "Name": "3am",
        "Href": "v1/security/users/108765"
    },
    "Region": {
        "Id": 9,
        "Code": "SP",
        "Name": "São Paulo",
        "Href": "v1/foundation/regions/9",
        "Hint": "Fuso horário BRA GMT -3 Com Horário de Verão"
    },
    "Tags": [],
    "Location": [],
    "Transitions": [
        {
            "Id": 1929840793,
            "Code": 34,
            "EnabledAt": "2024-09-27T09:12:35.52",
            "User": {
                "Id": 108765,
                "Code": "3am",
                "Name": "3am",
                "Href": "v1/security/users/108765"
            },
            "Variables": {},
            "WasExported": true,
            "Status": {
                "Id": 3,
                "Code": "Executed",
                "Name": "Executada",
                "ChangedAt": "2024-09-27T09:12:35.52"
            },
            "Step": {
                "Id": 34,
                "Code": "1",
                "Name": "SINCRONIZADA",
                "Href": "v1/foundation/workflows/102588765/stages/3213268",
                "Hint": "Tipo: SINCRONIZADA"
            }
        }
    ],
    "Variables": {},
    "Fields": {
        "Area": "NA",
        "Atividade": "01 - Percall Microinformatica",
        "CC": "4000020238",
        "Chamado": "INC-1143453",
        "Contato": "Supervisor Loja",
        "Email": "alexandre_ronze_ext@carrefour.com",
        "Solicitacao": "Departamento DIRETORIA CAIXA Localidade Operações Loja 1629 WPJ PAJUCARA S-BIG-AL Loja Parceira Bom Preço Sistemas TPLinux - PDV Vamos lá! Nos informe aonde está o seu problema? Travado Nome Completo MARY CARLA SANTOS  E-mail brz_wpj_cxc@carrefour.com Descreva o problema com detalhes PDV 8 DESLIGOU ERRO FATAL AO LIGAR NAO QUIS PEGAR MAIS ,",
        "Subatividade": "01 - Duas horas",
        "Telefone": "(82) 98719-4813",
        "MacroOfensor": "",
        "MicroOfensor": ""
    }
}


var os_new = {
    "Code": os_old.Code,
    "UserName": os_old.User.Code,
    "Observation": os_old.Observation,
    "OfficeCode": os_old.Region.Code,
    "Address": {
        "Street": os_old.Address.Street,
        "Number": os_old.Address.Number,
        "Complement": os_old.Address.Complement,
        "Neighborhood": os_old.Address.Neighborhood,
        "City": os_old.Address.City,
        "StateAcronym": os_old.Address.StateAcronym,
        "CountryAcronym": os_old.Address.CountryAcronym,
        "PostalCode": os_old.Address.PostalCode,
        "Latitude": os_old.Address.Latitude,
        "Longitude": os_old.Address.Longitude
    },
    "CustomerCode": os_old.Customer.Code,
    "WorkflowCode": os_old.Workflow.Code,
    "GroupCode": os_old.Group.Code,
    "Fields": os_old.Fields
}*/



async function fetchMovementTask(id) {
    const url = `http://api.primebuilder.com.br/Main/v1/movement/tasks/${id}`;
    const token = 'VOaKeoN8SCUP1gnrlIlR9tccigTeMN8608MfDgXO7CQX-SWFl_m8xGa1lguXO80n9tHlXw-wIjOfmVGcry6KOtaXDsqjlx8ekA4Oltf7GvhHJsiwfg6v2FYKDTE3zIezzSYJYt56nGGeSoAQ7W5PCXUYCdn_BNG_ZwP13Q_HqcpfpqSAaWOJpqfl_EBDzjOGZkmr8x2804K8l6hm4tE982e-xK1NlJNm8GTJeuAgPzCl4kyYAiZyhU0LZ4NDK7djdb52QJJP3XFjcLo07a3dBhwXzPElHdLqC61FUl92kI4kc-0PfEUbdSvsfzEoUqtbMilQ1OMERdxeOgMzSm1k-ve2yD87vzby807h7PKIsy_71gLcb1RxK-gTUqheHbXk-G4ynOaXCIm3BMnR7QqniSLfXHgVRTCGgjlS1Td7-vtWUrtKKVPtkAwY-sxGrBeFfnEMvvaN8Ly6dI1quTnUgkJHQmPqKrsT1uvontoTaPjOZlvN';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        //console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Exemplo de uso
var arr_id = [
    102579433,
    102579657,
    102579764,
    102579901,
    102579902,
    102579903,
    102579905,
    102579908,
    102579941,
    102579950,
    102579957,
    102588765,
    102589072,
    102589522,
    102589523,
    102589782,
    102589784,
    102589704,
    102590292,
    102590367,
    102590395,
    102590489,
    102590524,
    102590562,
    102590691,
    102590732,
    102590931,
    102590959,
    102590991,
    102591124,
    102591149,
    102591182,
    102591230,
    102591321,
    102591323,
    102591393,
    102591405,
    102591428,
    102591454,
    102591594,
    102591719,
    102591982,
    102592064,
    102592147,
    102592357,
    102592554,
    102592551,
    102592593,
];

//precisa criar a api de authentiação
for (var i = 0; i < arr_id.length ; i++) {
    fetchMovementTask(arr_id[i]).then(function (os_old) {
        var os_new = {
            "Code": os_old.Code + '####',
            "UserName": os_old.User.Code,
            "Observation": os_old.Observation,
            "OfficeCode": os_old.Office.Code,
            "Address": {
                "Street": os_old.Address.Street,
                "Number": os_old.Address.Number,
                "Complement": os_old.Address.Complement,
                "Neighborhood": os_old.Address.Neighborhood,
                "City": os_old.Address.City,
                "StateAcronym": os_old.Address.StateAcronym,
                "CountryAcronym": os_old.Address.CountryAcronym,
                "PostalCode": os_old.Address.PostalCode,
                "Latitude": os_old.Address.Latitude,
                "Longitude": os_old.Address.Longitude
            },
            "CustomerCode": os_old.Customer.Code,
            "WorkflowCode": os_old.Workflow.Code,
            "GroupCode": os_old.Group.Code,
            "Fields": os_old.Fields
        }

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer _xAij-Daq2EZyrxY3eO0E25u8eeWxghYmo8plBO7TmV6aeJW5dv6rsfbmTUyJZ1FDnlGdL4KOo4SHzE8zO4ye3QwaQA6z8f1rZdeDGCHD2HGx0-lvNaSylYlQ93x-Piw4IsR8uKwn1hlseAaN520ux_zXVlwXDOKESJSY2hxvTOCSkNypuv0PrrRNFUHasBNkP1EoxZFIQN0vK_jb230_TVIiUUxauX4GW4Qoqtj_fjKEwe42NMXSGAhsPZfAFGS-aDIxCvOmHNa-2lpXdavqfn4LVAHfxEwDt0THmDwC3aMpmqXON6PO2wHBAbC16ONRBb9mFpfzwwGZYXRpryf_cmst9yNWiIaIWRioxDsDTa4z9RUb6dYEZaSgzBe8MnBhChG-qtzKhV0VF3pNQAk2f1nJtzLeRJIII57YoIQ484VS8RIe4wdAO_57k9bKY3GAvbbhssiM3p-1pgYP9ceO30iZ5RpZsl219MIe7M2XVlUX_Vx");
        myHeaders.append("Accept", "text/csv");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(os_new);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://api.primebuilder.com.br/Main/v1/movement/tasks/", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));



        //console.log(JSON.stringify(os_new));
    });
}