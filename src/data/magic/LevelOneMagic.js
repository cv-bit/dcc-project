//fire bolt, arcane missle, charge, shell, heal, power boost, haste, sleep
import Magic from "./MagicClass"

const fireBolt = new Magic()
fireBolt.name = 'fire bolt'
fireBolt.type = 'combat'
fireBolt.damage = 2
fireBolt.magic = 1
fireBolt.value = 10

const protect = new Magic()
protect.name = 'protect'
protect.type = 'support'
protect.stat = 'tempHp'
protect.magic = 1
protect.value = 10

const heal = new Magic()
heal.name = 'heal'
heal.type = 'support'
heal.stat = 'hp'
heal.magic = 1
heal.value = 10

const attackBoost = new Magic()
attackBoost.name = 'attack boost'
attackBoost.type = 'support'
attackBoost.stat = 'magic'
attackBoost.magic = 1
attackBoost.value = 10

const levelOneMagic = [
    fireBolt,
    protect,
    heal,
    attackBoost
]

export default levelOneMagic