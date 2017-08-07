var RoleInfo=function(){
//名字
	this.name="";
//
	this.uid="";
//
	this.gold=0;
//
	this.sessionId=0;
//
	this.diamond=0;
//
	this.score=0;
//
	this.headIcon="";
//
	this.ip="";
//
	this.gps="";
//0:男,1:女,2:其他
	this.sex=0;
//0:正常,1:被封号
	this.accountState=0;

this.write=function(bodybuff)
{
	bodybuff.putUTF(this.name);
	bodybuff.putUTF(this.uid);
	bodybuff.putInt(this.gold);
	bodybuff.putInt(this.sessionId);
	bodybuff.putInt(this.diamond);
	bodybuff.putInt(this.score);
	bodybuff.putUTF(this.headIcon);
	bodybuff.putUTF(this.ip);
	bodybuff.putUTF(this.gps);
	bodybuff.putInt(this.sex);
	bodybuff.putInt(this.accountState);
};
this.read=function(buffer)
{
	this.name=buffer.readUTF();
	this.uid=buffer.readUTF();
	this.gold=buffer.readInt();
	this.sessionId=buffer.readInt();
	this.diamond=buffer.readInt();
	this.score=buffer.readInt();
	this.headIcon=buffer.readUTF();
	this.ip=buffer.readUTF();
	this.gps=buffer.readUTF();
	this.sex=buffer.readInt();
	this.accountState=buffer.readInt();
};
this.clone=function()
{
var cloneObj={};
cloneObj.name=this.name;
cloneObj.uid=this.uid;
cloneObj.gold=this.gold;
cloneObj.sessionId=this.sessionId;
cloneObj.diamond=this.diamond;
cloneObj.score=this.score;
cloneObj.headIcon=this.headIcon;
cloneObj.ip=this.ip;
cloneObj.gps=this.gps;
cloneObj.sex=this.sex;
cloneObj.accountState=this.accountState;
cloneObj.read=this.read;
cloneObj.write=this.write;
cloneObj.clone=this.clone;
return cloneObj;
};
};