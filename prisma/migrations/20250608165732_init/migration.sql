BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Fiscal] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Fiscal_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[EstadoExpediente] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [EstadoExpediente_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [EstadoExpediente_nombre_key] UNIQUE NONCLUSTERED ([nombre])
);

-- CreateTable
CREATE TABLE [dbo].[Expediente] (
    [id] INT NOT NULL IDENTITY(1,1),
    [numero] NVARCHAR(1000) NOT NULL,
    [fechaCreacion] DATETIME2 NOT NULL CONSTRAINT [Expediente_fechaCreacion_df] DEFAULT CURRENT_TIMESTAMP,
    [estadoId] INT NOT NULL,
    CONSTRAINT [Expediente_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Expediente_numero_key] UNIQUE NONCLUSTERED ([numero])
);

-- CreateTable
CREATE TABLE [dbo].[MovimientoExpediente] (
    [id] INT NOT NULL IDENTITY(1,1),
    [fecha] DATETIME2 NOT NULL CONSTRAINT [MovimientoExpediente_fecha_df] DEFAULT CURRENT_TIMESTAMP,
    [tipo] NVARCHAR(1000) NOT NULL,
    [fiscalId] INT NOT NULL,
    [expedienteId] INT NOT NULL,
    CONSTRAINT [MovimientoExpediente_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Expediente] ADD CONSTRAINT [Expediente_estadoId_fkey] FOREIGN KEY ([estadoId]) REFERENCES [dbo].[EstadoExpediente]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[MovimientoExpediente] ADD CONSTRAINT [MovimientoExpediente_fiscalId_fkey] FOREIGN KEY ([fiscalId]) REFERENCES [dbo].[Fiscal]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[MovimientoExpediente] ADD CONSTRAINT [MovimientoExpediente_expedienteId_fkey] FOREIGN KEY ([expedienteId]) REFERENCES [dbo].[Expediente]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
