//fire bolt, arcane missle, charge, shell, heal, power boost, haste, sleep
import Magic from "./MagicClass"

const fireBolt = new Magic()
fireBolt.name = 'fire bolt'
fireBolt.type = 'combat'
fireBolt.damage = 2
fireBolt.magic = 1
fireBolt.value = 10

const shell = new Magic()
shell.name = 'shell'
shell.type = 'support'
shell.stat = 'tempHp'
shell.magic = 1
shell.value = 10

const heal = new Magic()
heal.name = 'heal'
heal.type = 'support'
heal.stat = 'hp'
heal.magic = 1
heal.value = 10

const charge = new Magic()
charge.name = 'charge'
charge.type = 'support'
charge.stat = 'magic'
charge.magic = 1
charge.value = 10

const levelOneMagic = [
    fireBolt,
    shell,
    heal,
    charge
]

export default levelOneMagic