pragma solidity 0.5.0;

contract Ownable {
  address owner;
  constructor() public payable {//생성자
    owner = msg.sender;
  }

  /* 접근 제어자 선언 */
  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }
}
