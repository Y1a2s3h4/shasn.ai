export function getRandomInt(max = 4) {
    return Math.floor(Math.random() * max);
}

export function getShasnRules() {
    const rules = `# SHASN Rulebook

        ## Introduction

        You are a politician in the middle of a heated election.

        Prepare to make tough policy decisions, earn and manage resources and voters, adapt to the changing news landscape, and find yourself in constant stages of negotiation and sabotage. Experience the short-term and long-term pressures of decision making and be alert to the constantly shifting balance of power.

        As you progress, you must choose between sticking to your ideals or doing what is necessary to win. Build your ideology with every stand that you take; trade, coerce and strategize your way to victory.

        ## Index

        - Introduction
        - What's in the box
        - Overview
        - Setup
        - Gameplay Overview
        - Order of Turn
        - Influencing Voters
        - Forming a Majority
        - Coalitions
        - Gerrymandering
        - Resource Trading and Cap
        - Ideologues
        - Volatile Zones
        - Headline Cards
        - Conspiracy Cards
        - Ideologues
        - Coalitions
        - Scoring and End-Game
        - Ideologue Powers Explained
        - The Capitalist
        - The Showman
        - The Supremo
        - The Idealist

        ## What's in the Box

        - GAME BOARD x 1
        - CONSPIRACY CARDS x 20
        - IDEOLOGY CARDS x 108
        - HEADLINE CARDS x 20
        - HQ MAT x 1
        - VOTER PEGS x 60 x 4
        - RESOURCE TOKENS x 54 x 4
        - PLAYER MATS x 4
        - VOTE BANK CARDS x 60
        - RULEBOOK x 1
        - PUBLIC RESERVE BOX x 1
        - IDEOLOGUE CHARACTERS x 4
        - SPECIAL CHARACTERS x 12
        - SCENARIO BOOK x 1
        - HIDDEN OBJECTIVE CARDS x 10
        - INCUMBENT (LEGACY MODE) CARDS x 10
        - INCUMBENT (LEGACY MODE) TRACKER BOOK x 1
        - 'WHAT DOES YOUR SHASN LOOK LIKE?' HANDBOOK x 1

        ## Overview

        As a politician in SHASN, you must answer political dilemmas, manage resources, build ideologies, influence voters and form majorities. Players can also forge alliances, scheme and conspire, and negotiate with their political rivals.

        By influencing more than half the voters in a zone, a player forms a majority there. The game ends when majorities have been formed in all zones.* (see end game clause)

        ### How to Win
        At the end of the game, the player with the most majority voters wins.

        ## Setup

        - Each player selects a player mat and its corresponding bag of voters.
        - All players now vote to determine who starts as player one. In case of a tie, vote again. Players cannot vote for themselves.
        - Player 1 receives any 1 resource of their choice, Player 2 receives any 2 resources, Player 3 receives any 3 resources and Player 4 receives any 4 resources from the Public Reserve. *(Designer's Note - This is to offset the Player 1 advantage)*
        - After all players have received their resources, shuffle the deck of Vote Bank Cards and open the top three cards on the HQ Mat.

        ## Gameplay Overview

        ### Order of Turn

        - Players begin their turn by answering an Ideology Card.
        - They receive the corresponding resources from it and any other resources they earn from passive Ideologue Powers. (see Ideologues)
        - Each player has a resource cap of 12. Before taking any other actions, players have to choose and discard any excess resources down to 12.

        Players can take the remaining actions in their turn in any order:
        - Spend resources to influence voters from open Vote Bank Cards on the HQ Mat.
        - Form majorities by influencing more than half the voters in a zone (see Majorities)
        - Buy or use Conspiracy Cards - these can be used immediately or saved for later.
        - Trade resources and Conspiracy Cards amongst each other (1 for 1).
        - Gerrymander voters if applicable (see Gerrymandering).
        - Trigger Headline Cards if applicable (see Headlines).
        - Form or collapse coalitions in their turn (see Coalitions).
        - A player ends their turn by drawing and reading an Ideology Card for the next player.

        Turns are in clockwise order. At the start of a player's turn, the player on their right draws a card from the deck of Ideology Cards and reads it aloud to them.

        These Ideology Cards pose contemporary policy questions with a different answer on each side, yielding a separate set of resources. The player reading out the Ideology Card must hide these resources.

        During their turn, the player must choose between the two available answers, depending on their needs and beliefs. After confirming their answer, they repeat it aloud and keep the Ideology Card under their Player Mat with the answer face-up. They receive the corresponding resources from the Public Resource Box. The resources of each answer should not be revealed to the player until they have locked their answer.

        These resources can be used to influence voters or buy Conspiracy Cards (see Conspiracy Cards).

        Each answer also corresponds to a political ideology, indicated by the colored band at the bottom of the card. You will build ideologies over the course of the game and unlock exciting powers.

        ## Influencing Voters

        - Three Vote Bank Cards will always remain open on the HQ Mat.
        - After influencing a Vote Bank Card (of 1, 2 or 3 voters), a player must place that many voters on the board in any zone.
        - Any influenced voters must be placed on the board by the end of the same turn.
        - The voters from a single Vote Bank Card cannot be split across zones.
        - An influenced Vote Bank Card is added to the discard pile and a new one is opened in its place.
        - Players can buy multiple Vote Bank Cards in their turn, as many as their resources allow.

        ## Forming a Majority

        Influenced voters are placed on the board in an attempt to form majorities and capture zones. Every zone has its own fixed number of voters. A player needs to influence more than 50% of the voters in a zone to form the majority in that zone. This required number of voters is denoted by the fraction on each zone.

        - After forming the majority in a zone, flip over as many voters as were required to form the majority, with the 'S' side up. Each majority voter with the 'S' side up denotes 1 point earned.
        - Only the number of flipped majority voters count towards a player's final total in the game. In the zone shown above, any additional voters placed after the first 6 do not earn any more points and are kept with the blank side up.
        - Forming a majority also unlocks the Gerrymandering power (see Gerrymandering).
        - Players can also form Coalition majorities. (see Coalitions)
        - The voters used to form a majority are immune to Gerrymandering, unless specified.

        ## Coalitions

        Two players can jointly form the majority in a zone and control it together by forming a coalition. The total of their combined votes must meet the majority requirement of that zone.

        - In a coalition, players can split the majority votes in any ratio, open to negotiation.
        - When a coalition is formed, the two players must exchange an Ideology Card with each other. This card must belong to the ideology that they hold the most cards of. This represents the ideological cost of compromise.
        - The gerrymandering power of a zone can't be used when a coalition is formed there.
        - Players can form coalitions with different parties in different zones. Ideology Cards must be traded for every new coalition that is formed.
        - A coalition will break when one of the two players declares withdrawal.
        - The Ideology Cards that were swapped will not be returned to the players. New coalitions can be formed in a zone if an old one collapses.
        - Withdrawal can be declared at any point during the game, with no cost.

        ## Gerrymandering

        Gerrymandering is an important strategy to slow opponents down by dispersing their votes.

        Forming a majority in a zone gives a player influence in all neighbouring zones (with shared boundary lines). The player can now gerrymander voters every turn, i.e., move around voters in adjoining zones.

        Players can gerrymander a voter into an adjoining zone, into their majority zone, or in between two adjoining zones.

        - Gerrymandering must happen between zones with a shared boundary line.
        - Players can only gerrymander non-majority voters, i.e., voters that are not used to form majorities.
        - Players can gerrymander their own voters or an opponent's voters.
        - Every turn, players can gerrymander one voter per majority that they control.
        - Gerrymandering can only be used in zones with individual majorities, not coalitions.

        ## Resource Trading and Cap

        - Players must earn resources to influence Vote Bank Cards. They get resources from Ideology Cards and Ideologue Powers (see Ideologues).
        - Players have a resource cap of 12. Any additional resources over 12 must be discarded before a player can continue with their turn. A player can choose which excess resources to discard.
        - Players can trade resources with each other. Trade must be equitable (1 for 1, 2 for 2 and so on). There is no limit to the number of resources that can be traded per turn.

        ## Ideologues

        - While answering an Ideology Card in their turn, players have two answers to choose from. Both answers belong to different ideologies, denoted by the colored band at the bottom of the card.
        - As players answer Ideology Cards, they build their ideologies over the course of the game and unlock Ideologue Powers.
        - There are 4 Ideologues in the game - The Capitalist, The Showman, The Supremo, and The Idealist. These are powerful leaders with contrasting political beliefs.
        - Gathering 4 Ideology Cards of a single Ideologue unlocks the corresponding Level 4 power. Similarly, collecting 6 Ideology Cards of a single Ideologue unlocks the corresponding Level 6 power.
        - Every Ideologue also has a passive power: for every 2 Ideology Cards of a single type, players get 1 corresponding resource at the start of their turn.
        - Ideologue Powers can be used in the same turn as they are unlocked.
        - All Ideologue Powers stack up. A player can access multiple powers belonging to different Ideologues at the same time.
        - Players can use their unlocked Ideologue Powers every turn for the rest of the game, as long as they hold the corresponding Ideology Cards.
        - Stick to your beliefs, as Level 6 Ideologue Powers are extremely powerful and can break majorities.

        ## Volatile Zones

        - Each zone has one or more volatile zones marked with a black circle. Placing a voter peg in a volatile zone triggers a Headline Card (See Headline Cards).
        - A voter peg in a volatile zone stays there permanently. It cannot be converted, discarded, moved or gerrymandered even with Level 6 Ideologue Powers.
        - Players can either put their own voter in a volatile zone, or an opponent's voter, through gerrymandering.

        ## Headline Cards

        - Headline Cards are an array of opportunities and punishments that begin negotiations, boosting or hindering a player's gameplay.
        - After being triggered, Headlines are read at the end of the player's turn.
        - The Headline applies to the player whose voter peg is placed in the volatile zone.

        *Designer's Note: As 70% of Headline Cards are negative, it might be more beneficial to put an opponents' voter in a volatile zone.*

        ## Conspiracy Cards

        - Conspiracy Cards offer a variety of offensive and strategic maneuvers that players can purchase. They can cost 4 or 5 resources, denoted by the figure on the back of the card. They can be paid for with any combination of resources.
        - Conspiracy Cards can be used immediately or saved for later.
        - Conspiracy Cards can also be played after an opponent's turn ends and before the next player's turn starts. However, they cannot be played while another player's turn is ongoing (except Block! and Reverse!)
        - Players can buy multiple Conspiracy Cards in their turn, as many as resources allow.
        - There is no limit on the number of Conspiracy Cards a player can hold. Players can also use multiple Conspiracy Cards in one go.

        ## Scoring and End-Game

        - The game ends when a majority has been formed in every zone. The player with the maximum number of majority votes wins. Congratulations, and good luck with your new world order.
        - Non-majority votes do not add to a player's final tally.

        ### End Game Clause
        - If every single vote on the board has been cast, the final round of the game begins, starting with the player that cast the final vote. The rest of the players now have one final turn each to form or collapse coalitions, use Conspiracy Cards, negotiate, etc.

        *Note - During the end game, if there aren't enough empty spaces left on the board to place a group of influenced voters from a single Vote Bank Card, those voters get discarded.*

        ## Ideologue Powers Explained

        **Passive:** Every Ideologue has a passive resource input power. For every 2 Ideology Cards of a single type, players earn 1 resource corresponding to that Ideology. For instance, having 2 'The Capitalist' cards will get a player 1 free 'Funds' resource each turn. Having 4 'The Capitalist' cards will get them 2 free 'Funds' resources every turn and so on.

        Players get these additional resources when they answer the Ideology Card at the start of their turn.

        Players keep receiving free resources every turn as long as they hold the corresponding Ideology Cards.

        ### The Capitalist

        **LEVEL 4 - Open Market:** Every turn, trade 1 resource with the Public Reserve for any 2 resources of your choice.
        - A player must take both resources from the Public Reserve at the same time.

        **LEVEL 6 - Land Grab:** Every turn, evict up to any 2 voters from the board and send them back to their player's hand (including majority voters).
        - An opponent whose voters are evicted through this power can place the voters back anywhere on the board in their next turn. If that player fails to place their voters in their next turn, the voters are discarded.
        - If a player evicts their own voters, they can place them back anywhere on the board right away.
        - Voters in volatile zones cannot be evicted. Voters in volatile zones cannot be converted. Voters in volatile zones cannot be discarded. Voters in volatile zones cannot be gerrymandered.

        ### The Showman

        **LEVEL 4 - Echo Chamber:** Get +1 voter for every Vote Bank Card you influence, up to 3 votes per turn.
        - You get an extra voter for every Vote Bank Card you influence.
        - You can get an extra voter on a maximum of 3 unique Votebank Cards, every turn.

        **LEVEL 6 - Targeted Marketing:** Every turn, spend 2 media resources + any 3 resources to convert 2 of an opponent's voters into yours (including majority voters).
        - The 2 converted voters must belong to the same player in the same zone.
        - You cannot use this power without paying the resource cost.
        - Voters in volatile zones cannot be evicted. Voters in volatile zones cannot be converted. Voters in volatile zones cannot be discarded. Voters in volatile zones cannot be gerrymandered.

        ### The Supremo

        **LEVEL 4 - Donations:** Every turn, snatch up to 2 resources from other players.
        - You can use this power to snatch resources, i.e., take resources from other players without giving anything in return.
        - You can snatch 2 resources from the same player or 1 resource each from 2 different players.

        **LEVEL 6 - Civil Disobedience:** Every turn, spend 1 resource to choose and discard an opponent's voter. You can discard up to 2 voters (including majority voters).
        - You can pay 1 resource of your choice to discard 1 vote belonging to an opponent. You can do this twice every turn.
        - Voters in volatile zones cannot be evicted. Voters in volatile zones cannot be converted. Voters in volatile zones cannot be discarded. Voters in volatile zones cannot be gerrymandered.

        ### The Idealist

        **LEVEL 4 - Blind Faith:** You can discount the marked resource on Votebank Cards.
        - One resource on every Votebank Card is marked. After unlocking this power, you don't have to pay the marked resources while influencing voters.
        - This discount is only applicable on up to 3 Votebank Cards per turn.
        - Players can choose not to exercise this discount on every Card.

        **LEVEL 6 - Mass Mobilisation:** Every turn, you can now gerrymander 2 voters instead of 1 for each majority of yours (including majority voters).
        - The 2 voters you gerrymander for every majority can belong to the same opponent or different opponents.
        - You cannot use this power if you don't have any majorities of your own.
        - Voters in volatile zones cannot be evicted. Voters in volatile zones cannot be converted. Voters in volatile zones cannot be discarded. Voters in volatile zones cannot be gerrymandered.`
}
