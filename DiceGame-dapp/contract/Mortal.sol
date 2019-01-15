pragma solidity 0.5.0;

import "./Ownable.sol";

contract Mortal is Ownable{
    function kill() public onlyOwner {
        selfdestruct(msg.sender);//컨트랙트를 파기하는 함수
                                 /*인자로 받은 주소에 컨트랙트에 묶인 모든 이더를 송금한 뒤에
                                   컨트랙트를 파기*/
    }
}
