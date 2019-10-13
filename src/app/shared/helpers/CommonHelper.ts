import { LocalStorage } from "../wrappers/LocalStorage";
import * as ptLocale from 'date-fns/locale/pt';
import { DatepickerOptions } from 'ng2-datepicker';

export class CommonHelper {
    private localStorage : LocalStorage;

    getCurrentUser(){
        return this.localStorage.retrieve("user");
    }

    cpfValidator(cpf) {
        let soma = 0, rest;
        if(cpf.indexOf('.') !== -1){
            cpf = cpf.replace(/\./g, "");
            cpf = cpf.replace(/\-/g, "");
        }

        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
            
        for (let i=1; i<=9; i++) 
            soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
        rest = (soma * 10) % 11;
        if ((rest == 10) || (rest == 11)) rest = 0;
        if (rest != parseInt(cpf.substring(9, 10)) ) return false;
        
        soma = 0;
        for (let i = 1; i <= 10; i++) 
            soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        rest = (soma * 10) % 11;
        if ((rest == 10) || (rest == 11)) rest = 0;
        if (rest != parseInt(cpf.substring(10, 11) ) ) return false;
        
        return true;
    }

    transcriptSex(sex){
        switch(sex){
            case "0": return 'Não Informado'
            case "1": return 'Feminino'
            case "2": return 'Masculino'
        }
    }

    listAllMonths() {
        return [{ number: 0, name: 'Janeiro' },
        { number: 1, name: 'Fevereiro' },
        { number: 2, name: 'Março' },
        { number: 3, name: 'Abril' },
        { number: 4, name: 'Maio' },
        { number: 5, name: 'Junho' },
        { number: 6, name: 'Julho' },
        { number: 7, name: 'Agosto' },
        { number: 8, name: 'Setembro' },
        { number: 9, name: 'Outubro' },
        { number: 10, name: 'Novembro' },
        { number: 11, name: 'Dezembro' }]
    }

    formatMonth(value:number){
        let months = [
            'Janeiro',
            'Fereveiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ];

        return months[value]?months[value]:"-";
    }

    getDatePickerOptions(): DatepickerOptions {
        return {
            minYear: 1920,
            maxYear: 2030,
            displayFormat: 'DD/MM/YYYY',
            barTitleFormat: 'MMMM YYYY',
            firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
            locale: ptLocale,
            // minDate: new Date(Date.now()), // Minimal selectable date
            // maxDate: new Date(Date.now()),  // Maximal selectable date
            barTitleIfEmpty: 'Selecione uma data',
        };
    }

    getDropDownSettings(
        singleSelection: boolean,
        text: string,
        enableCheckAll:boolean,
        selectAllText: string,
        unSelectAllText: string,
        enableSearchFilter: boolean,
        groupBy: string,
        classes: string,
        disabled?: boolean
        ) {
        return {
            singleSelection: singleSelection,
            text: text,
            enableCheckAll:enableCheckAll,
            selectAllText: selectAllText,
            unSelectAllText: unSelectAllText,
            enableSearchFilter: enableSearchFilter,
            groupBy: groupBy,
            classes: classes,
            maxHeight:200,
            badgeShowLimit:5,
            disabled:disabled?disabled:false
        };
    }
}