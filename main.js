const elementShowResult = document.querySelector("#show-result");
const elementBtnBaiTap1 = document.querySelector("#btnBaptap1");
const elementBtnBaiTap2 = document.querySelector("#btnBaptap2");
const elementBtnBaiTap3 = document.querySelector("#btnBaptap3");
const elementBtnBaiTap4 = document.querySelector("#btnBaptap4");
const elementBtnBaiTap5 = document.querySelector("#btnBaptap5");
const elementBtnBaiTap6 = document.querySelector("#btnBaptap6");
const elementBtnBaiTap7 = document.querySelector("#btnBaptap7");
const elementBtnBaiTap8 = document.querySelector("#btnBaptap8");

const arr = [33,14,26,12,13,7,9,10,102,205,379,418,1]

const sapXepTangDan = () => {
    let sortLowToHigh = [];
    sortLowToHigh = arr.sort((a,b) => {
        return a - b
    });
    elementShowResult.textContent = " Sắp xếp tăng dần : " + sortLowToHigh
}

const sapXepGiamDan = () => {
    let sortHighToLow = [];
    sortHighToLow = arr.sort((a,b) => {
        return b - a
    });
    elementShowResult.textContent = " Sắp xếp giảm dần : " + sortHighToLow
}

const soChiaHetCho2 = () => {
    let tapHopSoChiaHetCho2 = [];

    for(let i = 0; i<arr.length; i++){
        if((arr[i] % 2) == 0){
            tapHopSoChiaHetCho2.push(arr[i])
        }
    }

    sortLowToHigh = [];
    sortLowToHigh = tapHopSoChiaHetCho2.sort((a,b) => {
        return a - b
    })

    elementShowResult.textContent = " Các số chia hết cho 2 là : " + sortLowToHigh
}

const soKhongChiaHetCho2 = () => {
    let tapHopSoKoChiaHetCho2 = [];

    for(let i = 0; i<arr.length; i++){
        if((arr[i] % 2) !== 0){
            tapHopSoKoChiaHetCho2.push(arr[i])
        }
    }

    sortHighToLow = [];
    sortHighToLow = arr.sort((a,b) => {
        return b - a
    });

    elementShowResult.textContent = " Các số không chia hết cho 2 là : " + tapHopSoKoChiaHetCho2
}

const tinhTong = () => {
    let tongCuaArr = 0;
    for(let i = 0; i < arr.length; i++){
        tongCuaArr = tongCuaArr + arr[i]
    }

    elementShowResult.textContent = "Tổng của các số trong danh sách là: " + tongCuaArr
}

const timSoLonNhat = () => {
    let theHighestNumber = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(theHighestNumber < arr[i]){
            theHighestNumber = arr[i]
        }
    }

    elementShowResult.textContent = " Số lớn nhất là : " + theHighestNumber;
}

const timSoBeNhat = () => {
    let theLowestNumber = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(theLowestNumber > arr[i]){
            theLowestNumber = arr[i]
        }
    }

    elementShowResult.textContent = " Số bé nhất là : " + theLowestNumber;
}

const timSoLonThu2 = () => {
    let sortHighToLow = [];
    sortHighToLow = arr.sort((a,b) => {
        return b - a
    });
    let soLonThu2 = sortHighToLow[1]
    elementShowResult.textContent = " Số lớn thứ 2 trong dãy số là : " + soLonThu2
}

elementBtnBaiTap1.addEventListener("click", sapXepTangDan)
elementBtnBaiTap2.addEventListener("click", sapXepGiamDan)
elementBtnBaiTap3.addEventListener("click", soChiaHetCho2)
elementBtnBaiTap4.addEventListener("click", soKhongChiaHetCho2)
elementBtnBaiTap5.addEventListener("click", tinhTong)
elementBtnBaiTap6.addEventListener("click", timSoLonNhat)
elementBtnBaiTap7.addEventListener("click", timSoBeNhat)
elementBtnBaiTap8.addEventListener("click", timSoLonThu2)

var mod = 8 / 3;
 
console.log(mod);