// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ICO {
    mapping(address => uint256) balances; // mapping(address => uint256)  _balances;
    address payable tokenFundsAddress; // Address of the wallet holding the token funds when they are first created
    uint256 amountRaised; // Keep track of ETH funds raised
    uint256 check;
    // This generates a public event on the blockchain that will notify listening clients
    event TokenBuy(
        address indexed sender,
        address indexed receiver,
        uint256 fundTransfered,
        uint256 tokensIssued
    );
    uint gbtoken = 1*1 ether;
    constructor(uint256 initialSupply) {
        balances[msg.sender] = initialSupply * gbtoken;
        check = initialSupply * gbtoken;
        tokenFundsAddress = payable(msg.sender);
    }

    function getBalance(address addr) public view returns (uint256) {
        return balances[addr];
    }

    function transfer(uint256 numTokens) public payable {
        tokenFundsAddress.transfer(msg.value);
        balances[tokenFundsAddress] -= (numTokens);
        balances[msg.sender] += (numTokens);
        amountRaised += msg.value;
        emit TokenBuy(msg.sender, tokenFundsAddress, msg.value, numTokens);
    }

    function calculatedToken(uint256 numTokens)
        public
        view
        returns (uint256 _tokenAssign)
    {
        uint256 numTokens1 = 0;
        uint256 numTokens2 = 0;
        uint256 numTokens3 = 0;
        uint256 numTokens4 = 0;
        uint256 e_numTokens1 = 0;
        uint256 e_numTokens2 = 0;
        uint256 e_numTokens3 = 0;
        uint256 e_numTokens4 = 0;
        uint256 rj = 0;
        if (numTokens > (check * 25) / 100) {
            numTokens1 = numTokens - (check * 25) / 100;
            e_numTokens1 = (check * 25) / 100;
            rj = rj + e_numTokens1;
            if (numTokens1 > (check * 50) / 100) {
                numTokens2 = numTokens1 - (check * 50) / 100;
                e_numTokens2 = (check * 25) / 100;
                rj = rj + e_numTokens2;
            } else {
                e_numTokens2 = numTokens1 / 2;
                rj = rj + e_numTokens2;
            }
            if (numTokens2 > (check * 75) / 100) {
                numTokens3 = numTokens2 - (check * 75) / 100;
                e_numTokens3 = (check * 25) / 100;
                rj = rj + e_numTokens3;
            } else {
                e_numTokens3 = numTokens2 / 3;
                rj = rj + e_numTokens3;
            }
            if (numTokens3 >= (check * 100) / 100) {
                numTokens4 = numTokens3 - (check * 100) / 100;
                e_numTokens4 = (check * 100) / 100;
                rj = rj + e_numTokens3;
            } else {
                e_numTokens4 = numTokens3 / 4;
                rj = rj + e_numTokens4;
            }
        } else {
            rj = rj + numTokens;
        }
        return rj;
    }

    function buyTokensWithEther() public payable {
        if(msg.value > ((check * 25)/100)*10 ){
            revert("Tu aamir hai bhai humse na hopyega");
        }
        else{
            uint256 numTokens = msg.value;
           if(balances[tokenFundsAddress]>(check*75)/100 && balances[tokenFundsAddress] <= (check*100)/100){
           transfer(calculatedToken(numTokens));
           }
           else if( balances[tokenFundsAddress]>(check*50)/100 && balances[tokenFundsAddress] <= (check*75)/100){
            transfer(calculatedToken(numTokens)/2);
           }
           else if( balances[tokenFundsAddress] > (check*25)/100 && balances[tokenFundsAddress] <= ((check*50)/100)){
               transfer(calculatedToken(numTokens)/3);
           }
           else if(balances[tokenFundsAddress] > (check*1)/100 && balances[tokenFundsAddress] <= (check*25)/100){
               transfer(calculatedToken(numTokens)/4);
           }
        }
    }
}