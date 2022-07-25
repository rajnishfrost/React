// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {

    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);

    function transfer(uint256 numTokens) payable external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);


    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event TokenBuy(address indexed sender,address indexed receiver,uint256 fundTransfered,uint256 tokensIssued);
}


contract ICO is IERC20 {

   
    string public  name ;
    string public  symbol ;
    uint8 public  decimals ;
    address payable mowner ;
    uint256 check;


    mapping(address => uint256) balances;

    mapping(address => mapping (address => uint256)) allowed;

    uint256 totalSupply_ = 1000*10**18;
    
     address[] public  savingData;
    

   constructor(uint256 initialSupply) {
    name = "RATAN_JETHALA_COIN";
    symbol = "RJC";
    decimals = 18;
    balances[msg.sender] = initialSupply * 10**18;
    check = initialSupply * 10**18;
    mowner = payable(msg.sender);
    }

    function totalSupply() public override view returns (uint256) {
    return totalSupply_;
    }

    function balanceOf(address tokenOwner) public override view returns (uint256) {
        return balances[tokenOwner];
    }

    function transfer(uint256 numTokens) public payable override returns (bool) {
        mowner.transfer(msg.value);
        balances[mowner] -= (numTokens);
        balances[msg.sender] += (numTokens);
        emit TokenBuy(msg.sender, mowner, msg.value, numTokens);
        return true;
    }

    function calculatedToken(uint256 numTokens)public view returns (uint256 _tokenAssign){
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

    function buyTokensWithEther(uint256 numTokens) public payable {
        numTokens = numTokens * 10**18;
        if (msg.value > ((check * 25) / 100) * 10) {
            revert("Tu aamir hai bhai humse na hopyega");
        } else {
            if (
                balances[mowner] > (check * 75) / 100 &&
                balances[mowner] <= (check * 100) / 100
            ) {
                transfer(calculatedToken(numTokens));
            } else if (
                balances[mowner] > (check * 50) / 100 &&
                balances[mowner] <= (check * 75) / 100
            ) {
                transfer(calculatedToken(numTokens) / 2);
            } else if (
                balances[mowner] > (check * 25) / 100 &&
                balances[mowner] <= ((check * 50) / 100)
            ) {
                transfer(calculatedToken(numTokens) / 3);
            } else if (
                balances[mowner] > (check * 1) / 100 &&
                balances[mowner] <= (check * 25) / 100
            ) {
                transfer(calculatedToken(numTokens) / 4);
            }
        }
    }

    function initialSupplyCheck() public view returns (uint256) {
        return check;
    }

    function approve(address delegate, uint256 numTokens) public override returns (bool) {
        allowed[mowner][delegate] = numTokens;
        emit Approval(mowner, delegate, numTokens);
        return true;
    }

    function allowance(address owner, address delegate) public override view returns (uint) {
        return allowed[owner][delegate];
    }

    function transferFrom(address owner, address buyer, uint256 numTokens) public override returns (bool) {
        require(numTokens <= balances[owner]);
        require(numTokens <= allowed[owner][mowner]);

        balances[owner] = balances[owner]-numTokens;
        allowed[owner][mowner] = allowed[owner][mowner]-numTokens;
        balances[buyer] = balances[buyer]+numTokens;
        emit Transfer(owner, buyer, numTokens);
        return true;
    }
     modifier OwnerOnly(){
     require(mowner == mowner ,'you Are Not Owner');
     _;
    }
    
    function ownerId() public view returns(address){
        return mowner;
    }
     function tokenBadha(uint _x) public OwnerOnly {
         totalSupply_ = totalSupply_+_x;
         balances[mowner] = totalSupply_;
     }
     function tokenGhata(uint _x) public OwnerOnly {
         totalSupply_ = totalSupply_-_x;
         balances[mowner] = totalSupply_;
     }
}