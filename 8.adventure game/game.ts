import { question } from "readline-sync";

function main() {
    //game variables
    const enemies: string[] = ['Skeleton', 'Zombie', 'Warrior', 'Assasin'];
    const maxEnemyHealth: number = 75;
    const enemyAttackDamage: number = 25;

    //player variables
    let health: number = 100;
    const attackDamage: number = 50;
    let numHealthPotions: number = 3;
    const healthPotionHealAmount: number = 30;
    const healthPotionDropChance: number = 50;

    let running: boolean = true;
    console.log('Welcome to the Dungen!');

    game:
    while (running) {
        let enemyHealth = Math.floor(Math.random() * maxEnemyHealth);
        let enemy = enemies[Math.floor(Math.random() * enemies.length)];
        console.log(`${enemy} appeared!`);

        while (enemyHealth > 0) {
            console.log(`Your hp:${health}`);
            console.log(`${enemy} hp:${enemyHealth}`);
            console.log(`What would u like to do?`);
            console.log(`1.Attack`);
            console.log(`2.Drink health potion`);
            console.log(`3.Run`);

            let input: string = question();
            if (input === '1') {
                let damageDealt: number = Math.floor(Math.random() * attackDamage);
                let damageTaken: number = Math.floor(Math.random() * enemyAttackDamage);

                enemyHealth -= damageDealt;
                health -= damageTaken;

                console.log(`You strike the ${enemy} for ${damageDealt} damage`);
                console.log(`You recieve ${damageTaken} in retaliation`);

                if (health < 1) {
                    console.log(`You have taken too much damage. You are to weak to go on!`);
                    break;
                }
            }
            else if (input === '2') {
                if (numHealthPotions > 0) {
                    health += healthPotionHealAmount;
                    numHealthPotions--;
                    console.log(`You drinked the health potion. Healing yourself for ${healthPotionHealAmount}.\nYou now have ${health} hp.\nYou have ${numHealthPotions} health potions left!`);
                }
                else {
                    console.log(`You have no health potions left. Defeat enemy to get one.`);
                }

            }
            else if (input === '3') {
                console.log(`You run away from ${enemy}!`);
                continue game;
            }
            else {
                console.log(`Invalid Command!`);
            }
        }

        if (health < 1) {
            console.log(`You limp out of the dungen, weak from battle.`);
            break;
        }

        console.log(`${enemy} was defeated!`);
        console.log(`You have ${health}hp left.`);

        if (Math.floor(Math.random() * 100) < healthPotionDropChance) {
            numHealthPotions++;
            console.log(`The ${enemy} dropped a health potion\nYou have ${numHealthPotions} health potions!`);
        }
        console.log(`What would u like to do now?\n1.Continue fighting\n2.Exit dungen`);

        let input2: string = question();
        while (!(input2 === '1' || input2 === '2')) {
            console.log('Invalid command!');
            input2 = question();
        }

        if (input2 === '1') {
            console.log('You continue on your adventure!');
        }
        else if (input2 === '2') {
            console.log('You exit the dungen!');
            break;
        }
    }
    console.log("Thanks for playing!");
}

main();