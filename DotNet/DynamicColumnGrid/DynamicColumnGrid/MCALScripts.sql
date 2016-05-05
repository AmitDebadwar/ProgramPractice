USE [master]
GO
/****** Object:  Database [MDK_DB]    Script Date: 05/05/2016 20:08:19 ******/
CREATE DATABASE [MDK_DB] ON  PRIMARY 
( NAME = N'MDK_DB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL.4\MSSQL\DATA\MDK_DB.mdf' , SIZE = 2240KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'MDK_DB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL.4\MSSQL\DATA\MDK_DB_log.LDF' , SIZE = 768KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [MDK_DB] SET COMPATIBILITY_LEVEL = 90
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MDK_DB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MDK_DB] SET ANSI_NULL_DEFAULT OFF
GO
ALTER DATABASE [MDK_DB] SET ANSI_NULLS OFF
GO
ALTER DATABASE [MDK_DB] SET ANSI_PADDING OFF
GO
ALTER DATABASE [MDK_DB] SET ANSI_WARNINGS OFF
GO
ALTER DATABASE [MDK_DB] SET ARITHABORT OFF
GO
ALTER DATABASE [MDK_DB] SET AUTO_CLOSE OFF
GO
ALTER DATABASE [MDK_DB] SET AUTO_CREATE_STATISTICS ON
GO
ALTER DATABASE [MDK_DB] SET AUTO_SHRINK OFF
GO
ALTER DATABASE [MDK_DB] SET AUTO_UPDATE_STATISTICS ON
GO
ALTER DATABASE [MDK_DB] SET CURSOR_CLOSE_ON_COMMIT OFF
GO
ALTER DATABASE [MDK_DB] SET CURSOR_DEFAULT  GLOBAL
GO
ALTER DATABASE [MDK_DB] SET CONCAT_NULL_YIELDS_NULL OFF
GO
ALTER DATABASE [MDK_DB] SET NUMERIC_ROUNDABORT OFF
GO
ALTER DATABASE [MDK_DB] SET QUOTED_IDENTIFIER OFF
GO
ALTER DATABASE [MDK_DB] SET RECURSIVE_TRIGGERS OFF
GO
ALTER DATABASE [MDK_DB] SET  DISABLE_BROKER
GO
ALTER DATABASE [MDK_DB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF
GO
ALTER DATABASE [MDK_DB] SET DATE_CORRELATION_OPTIMIZATION OFF
GO
ALTER DATABASE [MDK_DB] SET TRUSTWORTHY OFF
GO
ALTER DATABASE [MDK_DB] SET ALLOW_SNAPSHOT_ISOLATION OFF
GO
ALTER DATABASE [MDK_DB] SET PARAMETERIZATION SIMPLE
GO
ALTER DATABASE [MDK_DB] SET READ_COMMITTED_SNAPSHOT OFF
GO
ALTER DATABASE [MDK_DB] SET  READ_WRITE
GO
ALTER DATABASE [MDK_DB] SET RECOVERY FULL
GO
ALTER DATABASE [MDK_DB] SET  MULTI_USER
GO
ALTER DATABASE [MDK_DB] SET PAGE_VERIFY CHECKSUM
GO
ALTER DATABASE [MDK_DB] SET DB_CHAINING OFF
GO
USE [MDK_DB]
GO
/****** Object:  User [iwebuser]    Script Date: 05/05/2016 20:08:19 ******/
CREATE USER [iwebuser] FOR LOGIN [iwebuser] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[UserMangement]    Script Date: 05/05/2016 20:08:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserMangement](
	[Uid] [int] IDENTITY(1,1) NOT NULL,
	[Role] [nvarchar](20) NULL,
	[LoginName] [nvarchar](200) NULL,
	[Password] [nvarchar](50) NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_UserMangement] PRIMARY KEY CLUSTERED 
(
	[Uid] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[UserMangement] ON
INSERT [dbo].[UserMangement] ([Uid], [Role], [LoginName], [Password], [IsActive]) VALUES (1, N'Admin', N'amit', N'amit', 1)
INSERT [dbo].[UserMangement] ([Uid], [Role], [LoginName], [Password], [IsActive]) VALUES (2, N'Admin', N'shariq', N'shariq', 1)
INSERT [dbo].[UserMangement] ([Uid], [Role], [LoginName], [Password], [IsActive]) VALUES (3, N'Admin', N'mohan', N'mohan', 1)
INSERT [dbo].[UserMangement] ([Uid], [Role], [LoginName], [Password], [IsActive]) VALUES (4, N'Accountant', N'anand', N'anand', 0)
SET IDENTITY_INSERT [dbo].[UserMangement] OFF
/****** Object:  Table [dbo].[RoleMangement]    Script Date: 05/05/2016 20:08:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoleMangement](
	[Rid] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](50) NULL,
 CONSTRAINT [PK_RoleMangement] PRIMARY KEY CLUSTERED 
(
	[Rid] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[RoleMangement] ON
INSERT [dbo].[RoleMangement] ([Rid], [RoleName]) VALUES (1, N'SuperAdmin')
INSERT [dbo].[RoleMangement] ([Rid], [RoleName]) VALUES (2, N'Admin')
INSERT [dbo].[RoleMangement] ([Rid], [RoleName]) VALUES (3, N'Accountant')
INSERT [dbo].[RoleMangement] ([Rid], [RoleName]) VALUES (4, N'Accountant')
SET IDENTITY_INSERT [dbo].[RoleMangement] OFF
/****** Object:  Table [dbo].[ClientInfo]    Script Date: 05/05/2016 20:08:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ClientInfo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[BPAN] [nvarchar](50) NOT NULL,
	[BusinessType] [nvarchar](50) NOT NULL,
	[BusinessName] [nvarchar](200) NOT NULL,
	[DateOfEstablishment] [nvarchar](50) NOT NULL,
	[BusinessContactNo] [nvarchar](50) NOT NULL,
	[BusinessEmailId] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_ClientInfo] PRIMARY KEY CLUSTERED 
(
	[BPAN] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ClientInfo] ON
INSERT [dbo].[ClientInfo] ([id], [BPAN], [BusinessType], [BusinessName], [DateOfEstablishment], [BusinessContactNo], [BusinessEmailId]) VALUES (4, N'ANCPD5486N', N'Pvt LTD', N'Synechron', N'11-11-2016', N'9860785452', N'amit@synechron.com')
SET IDENTITY_INSERT [dbo].[ClientInfo] OFF
/****** Object:  Table [dbo].[tblColumnConfig]    Script Date: 05/05/2016 20:08:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblColumnConfig](
	[ColumnName] [nvarchar](50) NULL,
	[ColumnType] [nvarchar](50) NULL
) ON [PRIMARY]
GO
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'StudentRoll', N'string')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'StudentName', N'string')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'Math', N'number')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'Chemisty', N'number')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'ContactNumber', N'string')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'EmailID', N'string')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'Address', N'string')
INSERT [dbo].[tblColumnConfig] ([ColumnName], [ColumnType]) VALUES (N'Physics', N'number')
/****** Object:  Table [dbo].[StudentInfo]    Script Date: 05/05/2016 20:08:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentInfo](
	[StudentRoll] [nvarchar](50) NULL,
	[StudentName] [nvarchar](50) NULL,
	[Math] [int] NULL,
	[Chemistry] [int] NULL,
	[Physics] [int] NULL,
	[ContactNumber] [nvarchar](50) NULL,
	[EmailId] [nvarchar](50) NULL,
	[Address] [nvarchar](250) NULL
) ON [PRIMARY]
GO
INSERT [dbo].[StudentInfo] ([StudentRoll], [StudentName], [Math], [Chemistry], [Physics], [ContactNumber], [EmailId], [Address]) VALUES (N'1', N'John Cena', 95, 85, 75, N'9854578547', N'a@gmail.com', N'Pune,India')
INSERT [dbo].[StudentInfo] ([StudentRoll], [StudentName], [Math], [Chemistry], [Physics], [ContactNumber], [EmailId], [Address]) VALUES (N'2', N'Rocky Jackson', 75, 55, 45, N'9874152145', N'b@gmail.com', N'MP, India')
/****** Object:  Table [dbo].[PersonInfo]    Script Date: 05/05/2016 20:08:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonInfo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](30) NULL,
	[MiddleName] [nvarchar](30) NULL,
	[LastName] [nvarchar](30) NULL,
	[ContactNo] [nvarchar](20) NULL,
	[AlternateNo] [nvarchar](20) NULL,
	[EmailID] [nvarchar](100) NULL,
	[DateOfBirth] [nvarchar](50) NULL,
	[Address] [nvarchar](400) NULL,
	[BPAN] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_PersonInfo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[PersonInfo] ON
INSERT [dbo].[PersonInfo] ([id], [FirstName], [MiddleName], [LastName], [ContactNo], [AlternateNo], [EmailID], [DateOfBirth], [Address], [BPAN]) VALUES (1, N'Faizal', N'H', N'Husain', N'9854896587', N'9854562123', N'faisal@synechron.com', N'21-11-2016', N'ASCENDAS Hijewadi phase 3. Pune', N'ANCPD5486N')
INSERT [dbo].[PersonInfo] ([id], [FirstName], [MiddleName], [LastName], [ContactNo], [AlternateNo], [EmailID], [DateOfBirth], [Address], [BPAN]) VALUES (2, N'Amit', N'Chandrakant', N'Debadwar', N'9096174175', N'986070625', N'amit.debadwar@synechron.com', N'11-12-1985', N'A4 Sahadev Avenues, Someshwarwadi, Pashan, Pune. 411008', N'ANCPD5486N')
SET IDENTITY_INSERT [dbo].[PersonInfo] OFF
/****** Object:  Table [dbo].[BankInfo]    Script Date: 05/05/2016 20:08:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BankInfo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[BankName] [nvarchar](100) NULL,
	[Branch] [nvarchar](100) NULL,
	[AccountNo] [nvarchar](50) NULL,
	[IfscCode] [nvarchar](50) NULL,
	[MicrCode] [nvarchar](50) NULL,
	[BPAN] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_BankInfo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ITInfo]    Script Date: 05/05/2016 20:08:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ITInfo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[PAN] [nvarchar](50) NULL,
	[TAN] [nvarchar](50) NULL,
	[VAT] [nvarchar](50) NULL,
	[CST] [nvarchar](50) NULL,
	[PTEC] [nvarchar](50) NULL,
	[PTRC] [nvarchar](50) NULL,
	[BPAN] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_ITInfo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OtherInfo]    Script Date: 05/05/2016 20:08:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OtherInfo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ServiceTaxNumber] [nvarchar](50) NULL,
	[ExciseNumber] [nvarchar](200) NULL,
	[PFESINumber] [nvarchar](50) NULL,
	[BPAN] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_OtherInfo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[procColumnConfig]    Script Date: 05/05/2016 20:08:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		 Amit D
-- Create date:  
-- Description: 
-- =============================================
CREATE PROCEDURE [dbo].[procColumnConfig]
 
	 
AS
BEGIN
 
	SET NOCOUNT ON;
    SELECT  * from [MDK_DB].[dbo].[tblColumnConfig]
END
GO
/****** Object:  StoredProcedure [dbo].[StudentTableConfigWithData]    Script Date: 05/05/2016 20:08:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE  [dbo].[StudentTableConfigWithData]
	 
AS
BEGIN
	 
	SET NOCOUNT ON;
   
	SELECT  [StudentRoll]
      ,[StudentName]
      ,[Math]
      ,[Chemistry]
      ,[Physics]
      ,[ContactNumber]
      ,[EmailId]
      ,[Address]
  FROM [MDK_DB].[dbo].[StudentInfo]
  
  
  SELECT   [ColumnName]
      ,[ColumnType]
  FROM [MDK_DB].[dbo].[tblColumnConfig]
  
END
GO
/****** Object:  ForeignKey [FK_PersonInfo_ClientInfo]    Script Date: 05/05/2016 20:08:19 ******/
ALTER TABLE [dbo].[PersonInfo]  WITH CHECK ADD  CONSTRAINT [FK_PersonInfo_ClientInfo] FOREIGN KEY([BPAN])
REFERENCES [dbo].[ClientInfo] ([BPAN])
GO
ALTER TABLE [dbo].[PersonInfo] CHECK CONSTRAINT [FK_PersonInfo_ClientInfo]
GO
/****** Object:  ForeignKey [FK_BankInfo_ClientInfo]    Script Date: 05/05/2016 20:08:19 ******/
ALTER TABLE [dbo].[BankInfo]  WITH CHECK ADD  CONSTRAINT [FK_BankInfo_ClientInfo] FOREIGN KEY([BPAN])
REFERENCES [dbo].[ClientInfo] ([BPAN])
GO
ALTER TABLE [dbo].[BankInfo] CHECK CONSTRAINT [FK_BankInfo_ClientInfo]
GO
/****** Object:  ForeignKey [FK_ITInfo_ClientInfo]    Script Date: 05/05/2016 20:08:19 ******/
ALTER TABLE [dbo].[ITInfo]  WITH CHECK ADD  CONSTRAINT [FK_ITInfo_ClientInfo] FOREIGN KEY([BPAN])
REFERENCES [dbo].[ClientInfo] ([BPAN])
GO
ALTER TABLE [dbo].[ITInfo] CHECK CONSTRAINT [FK_ITInfo_ClientInfo]
GO
/****** Object:  ForeignKey [FK_OtherInfo_ClientInfo]    Script Date: 05/05/2016 20:08:19 ******/
ALTER TABLE [dbo].[OtherInfo]  WITH CHECK ADD  CONSTRAINT [FK_OtherInfo_ClientInfo] FOREIGN KEY([BPAN])
REFERENCES [dbo].[ClientInfo] ([BPAN])
GO
ALTER TABLE [dbo].[OtherInfo] CHECK CONSTRAINT [FK_OtherInfo_ClientInfo]
GO
